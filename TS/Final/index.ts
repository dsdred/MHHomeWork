import * as mock from "./mockobject";
import { Library, User, UserFilter, Role } from "./users";
import { Catalog, Book, BookFilter, Genre  } from "./catalog";








//////////////////////////////////////////////////////////////
// Работа с пользователями

const myLibrary = new Library()
const godUser   = myLibrary.LogInGod()

// console.log(godUser);

// заполняем пользователей для тестов
mock.addUsers(myLibrary, godUser)

// Получаем пользователей по Id
const findUser1 = myLibrary.getUserByID(godUser, 1) // админ
// console.log(findUser1);
const findUser2 = myLibrary.getUserByID(godUser, 100) // библиотекарь
// console.log(findUser2);
const findUser3 = myLibrary.getUserByID(godUser, 3) // читатель
// console.log(findUser3);

// myLibrary.deleteUser(findUser2, godUser) // библиотекарь пытается удалить админа
// console.log(godUser);

myLibrary.deleteUser(godUser, findUser2) // админ удаляет мятежного библиотекаря
// console.log(findUser2);


// работаем с поиском
// let options = new UserFilter()
// // options.name        = 'Sindee';
// options.name        = 'Иван';
// // options.email       = '911@library.ru';
// // options.role        = [Role.admin];
// // options.role        = [Role.reader];
// // options.role        = [Role.reader, Role.librarian];
// // options.active      = false;
// console.log(myLibrary.getUsers(godUser, options));


// работаем с изменением
let options = new UserFilter()
// options.id = 66
// // options.name        = 'Sindee';
// options.name        = 'Иван';
// options.email       = '911@library.ru';
// options.role        = [Role.admin];
// // // options.role        = [Role.reader];
// // // options.role        = [Role.reader, Role.librarian];
options.active      = true;
myLibrary.putUser(godUser, findUser2, options)

// console.log(findUser2);
// console.log();
// console.log(myLibrary.getUsers(godUser, options));


//////////////////////////////////////////////////////////////
// Работа с книгами

const myCatalog = new Catalog()
let newBook     = new BookFilter
newBook.name    = "Цель"
newBook.author  = "Элияху Голдратт"
newBook.genre   = [Genre.fantasy]
newBook.year    = 2014

myCatalog.postBook(findUser2, newBook)
console.log(myCatalog);


// myCatalog.post(newBook)
// myCatalog.post(newBook)
// myCatalog.post(newBook)