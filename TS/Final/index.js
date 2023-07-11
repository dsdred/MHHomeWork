"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock = require("./mockobject");
var users_1 = require("./users");
var catalog_1 = require("./catalog");
//////////////////////////////////////////////////////////////
// Работа с пользователями
var myLibrary = new users_1.Library();
var godUser = myLibrary.LogInGod();
// console.log(godUser);
// заполняем пользователей для тестов
mock.addUsers(myLibrary, godUser);
// Получаем пользователей по Id
var findUser1 = myLibrary.getUserByID(godUser, 1); // админ
// console.log(findUser1);
var findUser2 = myLibrary.getUserByID(godUser, 100); // библиотекарь
// console.log(findUser2);
var findUser3 = myLibrary.getUserByID(godUser, 3); // читатель
// console.log(findUser3);
// myLibrary.deleteUser(findUser2, godUser) // библиотекарь пытается удалить админа
// console.log(godUser);
myLibrary.deleteUser(godUser, findUser2); // админ удаляет мятежного библиотекаря
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
var options = new users_1.UserFilter();
// options.id = 66
// // options.name        = 'Sindee';
// options.name        = 'Иван';
// options.email       = '911@library.ru';
// options.role        = [Role.admin];
// // // options.role        = [Role.reader];
// // // options.role        = [Role.reader, Role.librarian];
options.active = true;
myLibrary.putUser(godUser, findUser2, options);
// console.log(findUser2);
// console.log();
// console.log(myLibrary.getUsers(godUser, options));
//////////////////////////////////////////////////////////////
// Работа с книгами
var myCatalog = new catalog_1.Catalog();
var newBook = new catalog_1.BookFilter;
newBook.name = "Цель";
newBook.author = "Элияху Голдратт";
newBook.genre = [catalog_1.Genre.fantasy];
newBook.year = 2014;
myCatalog.postBook(findUser2, newBook);
console.log(myCatalog);
// myCatalog.post(newBook)
// myCatalog.post(newBook)
// myCatalog.post(newBook)
