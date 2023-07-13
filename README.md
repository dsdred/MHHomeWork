# Домашнее задание в Muthshub #

В папке TS лежит выполненное домашнее задание по TypeScript.
- DZ1 простые примеры
- DZ2 примеры с generic
- Final финальный проект "Система управления библиотекой"
  
## Описание "Системы управления библиотекой" ##

### Файл "index.ts" - основной. В нем происходит инициализация и запуск примеров. ###

### Файл "mockobject.ts" - содержит функции: ###

#### function addUsers (myLibrary: Library, godUser: User) - создание тестовых данных. ####
* Добавляется библиотека
* добавляется 102 пользователя

###### Пример для файла index.ts: ######
        import * as mock from "./mockobject";
        import { Library, User, UserFilter, Role } from "./users";

        const myLibrary = new Library()
        // создаем первого админа
        const godUser   = myLibrary.LogInGod()
        // заполняем пользователей для тестов
        mock.addUsers(myLibrary, godUser)

#### function addBooks (myCatalog: Catalog, godUser: User) - создание тестовых данных. #### 
* Добавляется каталог
* Добавляется 101 книга
###### Пример для файла index.ts: ######
        import * as mock from "./mockobject";
        import { Library, User, UserFilter, Role } from "./users";
        import { Catalog, Book, BookFilter, Genre, BookReview  } from "./catalog";

        const myCatalog = new Catalog()
        mock.addBooks(myCatalog, User) // User - пользователь с ролью [Role.librarian]

### файл "generalmethods.ts" содержит вспомогательные функции. ###

### Файл "User.ts" содержит следующие классы: ###
1. User - пользователь.
##### Свойства: #####
- readonly id:        number    (номер)
- name:               string    (имя)
- email:              string    (электронная почта)
- role:               Role[]    (роли {admin, reader, librarian})
- readonly favorites: number[]  (избранное)
- private active:     boolean   (активен/удален)
##### Функции: #####
#### adminSetActive(currentUser: User, active: boolean) - используется для установки значения "activate". ####
- Если Истина тогда пользователь активен. 
- Если Ложь тогда пользователь удален.
###### Пример: ######
        changeUser.adminSetActive(currentUser, false)

#### getId() - получить номер пользователя. ####
###### Пример: ######
        User.getId()

#### getActive() - получить статус пользователя (активен/удален) ####
###### Пример: ######
        User.getActive()

#### postFavorites (id:number) - добавить книги в список "Избранное". ####

###### Пример: ######
        User.postFavorites(13)

2. UserFilter - фильтр для отборов, изменения и создания пользователей.
##### Свойства: #####
* id?:    number    (номер)
* name?:  string    (имя)
* email?: string    (электронная почта)
* role?:  Role[]    (роли {admin, reader, librarian})
* active?:boolean   (активен/удален)


3. Library - Библиотека. Служит для управления пользователями.
##### Свойства: #####
- private finalId: number (последний зарегистрированный номер)
- private users: User[] (все пользователи библиотеки)

##### Функции: #####
#### createGod() - создаем первого пользователя с правами администратора. ####
#### LogInGod () - получает первого пользователя если он есть. Если его нет, вызывает createGod() ####

###### Пример: ######
        const myLibrary = new Library()
        const godUser   = myLibrary.LogInGod()

#### getUserByID(currentUser: User, id:number) - получаем пользователя по id. ####

###### Пример: ######
        const findUser1 = myLibrary.getUserByID(godUser, 1) // админ
        const findUser2 = myLibrary.getUserByID(godUser, 100) // библиотекарь
        const findUser3 = myLibrary.getUserByID(godUser, 3) // читатель

#### getUsers(currentUser: User, option: UserFilter) - получить список пользователей на основании фильтра. ####
###### Пример: вывод всех удаленных читателей ######
        let options         = new UserFilter()
        options.role        = [Role.reader];
        options.active      = false;
        console.log(myLibrary.getUsers(godUser, options));

#### postUser(currentUser: User, option: UserFilter) - создаем пользователя. ####
###### Пример: создание администратора ######
        let options         = new UserFilter()
        options.name        = 'Иван';
        options.email       = '911@library.ru';
        options.role        = [Role.admin];
        options.active      = true;
        myLibrary.postUser(godUser, options) 

#### deleteUser(currentUser: User, changeUser:User) - удаление пользователя. Ставим пометку, что пользователь не активен. ####
###### Пример: удаляем пользователя ######
        myLibrary.deleteUser(godUser, User)

#### putUser(currentUser: User, changeUser:User, option: UserFilter) - редактируем пользователя. ####
###### Пример: активируем пользователя и даем права администратора ######
        let options     = new UserFilter()
        options.role    = [Role.admin];
        options.active  = true;
        myLibrary.putUser(godUser, User, options)

### Файл "catalog.ts" содержит следующие классы: ###
1. Book - книга.
##### Свойства: #####
    readonly id:    number          (номер)
    name:           string          (название)
    author:         string          (автор)
    genre:          Genre[]         (жанр)
    year:           number          (год издания)
    private active: boolean         (активена/удалена)
    review:         BookReview[]    (обзор)
##### Функции: #####
#### librarianSetActive(currentUser: User, active: boolean) - библиотекарь устанавливает активна или удалена книга ####
###### Пример: ######
        Book.librarianSetActive(User, false)

#### getId() - получить номер книги. ####
###### Пример: ######
        User.getId()

#### getActive() - получить статус книги (активена/удалена) ####
###### Пример: ######
        User.getActive()

#### postReview (review:BookReview) - добавить отзыв на книгу. ####

###### Пример: ######
        let review     = new BookReview
        review.userid  = 1
        review.review  = 'Отзыв положительный'
        review.grade   = 9
        Book.postReview(review1)

2. BookFilter - фильтр для отборов, изменения и создания книг.
##### Свойства: #####
* id?:    number    (номер)
* name?:  string    (название)
* author?:string    (автор)
* genre?: Genre[]   (жанр(ы))
* year?:  number    (год издания)
* active?:boolean   (активена/удалена)

3. BookFilter - отзыв.обзор.
##### Свойства: #####
* userid: number (номер пользователя)
* review: string (текст отзыва/обзора)
* grade:  number (оценка)

4. Catalog - Каталог. Служит для управения книгами.
##### Свойства: #####
* private finalId: number (последний зарегистрированный номер)
* private books:   Book[] (все книги каталога)

##### Функции: #####
#### getBookByID(id:number) - получаем книгу по номеру ####
###### Пример: ######
        const findBook = myCatalog.getBookByID(1)

#### getBooks(option: BookFilter) - получить список книг на основании фильтра. ####
###### Пример: выводим все комедии и поэмы выпущенные в 2007 году. ######
        let optionbook     = new BookFilter
        optionbook.genre   = [Genre.poems, Genre.comedy]
        optionbook.year    = 2007
        console.log(myCatalog.getBooks(optionbook));

#### postBook(currentUser: User, option:BookFilter) - создаем книгу ####
###### Пример: ######
        let newBook     = new BookFilter
        newBook.name    = "Цель"
        newBook.author  = "Элияху Голдратт"
        newBook.genre   = [Genre.business, Genre.theory]
        newBook.year    = 2014
        newBook.active  = true;
        myCatalog.postBook(godUser, newBook)

#### deleteBook(currentUser: User, changeBook:Book) - ставим пометку, что книга не активена/удалена ####
###### Пример: ######
        const myCatalog = new Catalog()
        myCatalog.deleteBook(User, Book) 

#### putBook(currentUser: User, changeBook:Book, option: BookFilter) - редактируем книгу ####
###### Пример: изменяем автора, жанр и дату издания ######
        let optionbook     = new BookFilter
        optionbook1.author  = "Элияху Голдратт"
        optionbook1.genre   = [Genre.business]
        optionbook1.year    = 2014
        myCatalog.putBook(godUser, Book, optionbook)