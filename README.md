# Домашнее задание в Muthshub #

В папке TS лежит выполненное домашнее задание по TypeScript.
- DZ1 простые примеры
- DZ2 примеры с generic
- Final финальный проект "Система управления библиотекой"
  
## Описание "Системы управления библиотекой" ##

Файл "index.ts" - основной. В нем происходит инициализация и запуск примеров.

Файл "mockobject.ts" - содержит функции:

function addUsers (myLibrary: Library, godUser: User) - создание тестовых данных.
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

function addBooks (myCatalog: Catalog, godUser: User) - 
* Добавляется каталог
* Добавляется 101 книга
###### Пример для файла index.ts: ######
        import * as mock from "./mockobject";
        import { Library, User, UserFilter, Role } from "./users";
        import { Catalog, Book, BookFilter, Genre, BookReview  } from "./catalog";

        const myCatalog = new Catalog()
        mock.addBooks(myCatalog, User) // User - пользователь с ролью [Role.librarian]

файл "generalmethods.ts" содержит вспомогательные функции.

Файл "User.ts" содержит следующие классы:
1. User - пользователи.
##### Свойства: #####
- readonly id:        number    (номер)
- name:               string    (имя)
- email:              string    (электронная почта)
- role:               Role[]    (роли {admin, reader, librarian})
- readonly favorites: number[]  (избранное)
- private active:     boolean   (активен/удален)
##### Функции: #####
adminSetActive(currentUser: User, active: boolean) - используется для установки значения "activate". 
- Если Истина тогда пользователь активен. 
- Если Ложь тогда пользователь удален.
###### Пример: ######
        changeUser.adminSetActive(currentUser, false)

getId() - получить номер пользователя.
###### Пример: ######
        User.getId()

getActive() - получить статус пользователя (активен/удален)
###### Пример: ######
        User.getActive()

postFavorites (id:number) - добавить книги в список "Избранное".

###### Пример: ######
        User.postFavorites(13)

2. UserFilter - фильтр для отборов, изменения и создания пользователей.
##### Свойства: #####
* id?:    number    (номер)
* name?:  string    (имя)
* email?: string    (электронная почта)
* role?:  Role[]    (роли {admin, reader, librarian})
* active?:boolean   (активен/удален)


1. Library - Библиотека. Служит для управления пользователями.
##### Свойства: #####
- private finalId: number
- private users: User[]

##### Функции: #####
createGod() - создаем первого пользователя с правами администратора.
LogInGod () - получает первого пользователя если он есть. Если его нет, вызывает createGod()

###### Пример: ######
        const myLibrary = new Library()
        const godUser   = myLibrary.LogInGod()

getUserByID(currentUser: User, id:number) - получаем пользователя по id.

###### Пример: ######
        const findUser1 = myLibrary.getUserByID(godUser, 1) // админ
        const findUser2 = myLibrary.getUserByID(godUser, 100) // библиотекарь
        const findUser3 = myLibrary.getUserByID(godUser, 3) // читатель

getUsers(currentUser: User, option: UserFilter) - получить список пользователей на основании фильтра.