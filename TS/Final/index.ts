import * as mock from "./mockobject";
import { Library, User, UserFilter, Role } from "./users";
import { Catalog, Book, BookFilter, Genre, BookReview } from "./catalog";

//////////////////////////////////////////////////////////////
// Работа с пользователями

const myLibrary = new Library();
const godUser = myLibrary.LogInGod();

// console.log(godUser);

// заполняем пользователей для тестов
mock.addUsers(myLibrary, godUser);

// Получаем пользователей по Id
const findUser1 = myLibrary.getUserByID(godUser, 1); // админ
// console.log(findUser1);
const findUser2 = myLibrary.getUserByID(godUser, 100); // библиотекарь
// console.log(findUser2);
const findUser3 = myLibrary.getUserByID(godUser, 3); // читатель
// console.log(findUser3);

// // myLibrary.deleteUser(findUser2, godUser) // библиотекарь пытается удалить админа
// // console.log(godUser);

myLibrary.deleteUser(godUser, findUser2); // админ удаляет мятежного библиотекаря
console.log("удаляем юзера:");
console.log(findUser2);

// // работаем с поиском
// // let options = new UserFilter()
// // // options.name        = 'Sindee';
// // options.name        = 'Иван';
// // // options.email       = '911@library.ru';
// // // options.role        = [Role.admin];
// // // options.role        = [Role.reader];
// // // options.role        = [Role.reader, Role.librarian];
// // // options.active      = false;
// // console.log(myLibrary.getUsers(godUser, options));

// работаем с изменением
let options = new UserFilter();
// options.id = 66
// // options.name        = 'Sindee';
options.name = "Иван";
// options.email       = '911@library.ru';
// options.role        = [Role.admin];
// // // options.role        = [Role.reader];
// // // options.role        = [Role.reader, Role.librarian];
options.active = true;
console.log("восстановили удаленного юзера:");
myLibrary.editUser(godUser, findUser2, options);

console.log(findUser2);
// // console.log();
// // console.log(myLibrary.getUsers(godUser, options));

//////////////////////////////////////////////////////////////
// Работа с книгами

const myCatalog = new Catalog();
mock.addBooks(myCatalog, findUser2);

// console.log(myCatalog);

// Получаем книги по Id
const findBook1 = myCatalog.getBookByID(1); //"Цель","Элияху Голдратт", [Genre.business, Genre.theory], 2014, true
// console.log(findBook1);
const findBook2 = myCatalog.getBookByID(100); // "Mickey Blue Eyes", "Gusty", [Genre.theory, Genre.novel], year:1992, false
// console.log(findBook2);
const findBook3 = myCatalog.getBookByID(3); //"Wedding Trough (Vase de noces)", "Avis", [Genre.poems, Genre.comedy], 1999, false}
// console.log(findBook3);

myCatalog.deleteBook(godUser, findBook2); // админ пытается удалить книгу
console.log(findBook2);

myCatalog.deleteBook(findUser2, findBook2); // библиотекарь пытается удалить книгу
console.log(findBook2);

// работаем с поиском
let optionbook = new BookFilter();
// optionbook.name    = "Цель"
// optionbook.author  = "Элияху Голдратт"
// optionbook.genre   = [Genre.business]
// optionbook.genre   = [Genre.poems, Genre.comedy]
// optionbook.year    = 2014
// optionbook.year    = 2007
// optionbook.active  = true;
// console.log(myCatalog.getBooks(optionbook));

// работаем с изменением
let optionbook1 = new BookFilter();
optionbook1.name = "Цель";
optionbook1.author = "Элияху Голдратт";
// optionbook1.genre   = [Genre.business]
optionbook1.genre = [Genre.poems, Genre.comedy];
// optionbook1.year    = 2014
optionbook1.year = 2007;
optionbook1.active = true;

// myCatalog.putBook(godUser, findBook2, optionbook1)
myCatalog.editBook(findUser2, findBook2, optionbook1);
console.log(findBook2);

// Добавить книгу в избранное
godUser.postFavorites(13);
godUser.postFavorites(133);
godUser.postFavorites(33);
console.log(godUser);

godUser.deleteFavorites(133);
console.log(godUser);

//отзыв и оценка
let review1 = new BookReview();
review1.userid = 1;
review1.review = "Отзыв положительный";
review1.grade = 9;

findBook2.postReview(review1);
console.log(findBook2);

let review2 = new BookReview();
review2.userid = 13;
review2.review = "ниче непонял";
review2.grade = 5;
findBook2.postReview(review2);
console.log(findBook2);
