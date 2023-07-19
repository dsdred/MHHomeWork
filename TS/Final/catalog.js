"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookReview = exports.Catalog = exports.BookFilter = exports.Book = exports.Genre = void 0;
var users_1 = require("./users");
var generalmethods_1 = require("./generalmethods");
// Жанры книг
var Genre;
(function (Genre) {
    Genre["comedy"] = "Comedy";
    Genre["thriller"] = "Thriller";
    Genre["poems"] = "Poems";
    Genre["fantasy"] = "Fantasy";
    Genre["business"] = "Business";
    Genre["psychology"] = "Psychology";
    Genre["theory"] = "Theory";
    Genre["novel"] = "Novel";
    Genre["history"] = "History";
})(Genre || (exports.Genre = Genre = {}));
var Book = /** @class */ (function () {
    function Book(id, name, author, genre, year, active) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.genre = __spreadArray([], genre, true);
        this.year = year;
        this.setActive(active);
        this.review = [];
    }
    Book.prototype.setActive = function (active) {
        this.active = active;
    };
    Book.prototype.librarianSetActive = function (currentUser, active) {
        if (currentUser.getActive() &&
            currentUser.role.indexOf(users_1.Role.librarian) >= 0) {
            this.active = active;
        }
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getActive = function () {
        return this.active;
    };
    // добавить отзыв на книгу.
    Book.prototype.postReview = function (review) {
        this.review.push(review);
    };
    return Book;
}());
exports.Book = Book;
var BookFilter = /** @class */ (function () {
    function BookFilter() {
    }
    return BookFilter;
}());
exports.BookFilter = BookFilter;
var BookReview = /** @class */ (function () {
    function BookReview() {
    }
    return BookReview;
}());
exports.BookReview = BookReview;
var Catalog = /** @class */ (function () {
    function Catalog() {
        this.finalId = 0;
        this.books = [];
    }
    // получаем книгу
    Catalog.prototype.getBookByID = function (id) {
        var findBooks = this.books.filter(function (item, index, arr) {
            return item.id === id;
        });
        var findBook = findBooks.length > 0
            ? findBooks[0]
            : new Book((this.finalId += 1), "name", "author", [], 1000, false);
        if (findBook === undefined) {
            console.log("Книга отсутствует.");
            return new Book((this.finalId += 1), "name", "author", [], 1001, false);
        }
        else {
            return findBook;
        }
    };
    // получить список книг на основании фильтра.
    Catalog.prototype.getBooks = function (option) {
        var findBooks = __spreadArray([], this.books, true);
        var _loop_1 = function (key) {
            findBooks = findBooks.filter(function (item, index, arr) {
                return (0, generalmethods_1.compareBooksValue)(item, option, key);
            });
        };
        for (var key in option) {
            _loop_1(key);
        }
        return findBooks;
    };
    // создаем книгу
    Catalog.prototype.createBook = function (currentUser, option) {
        var arrErr = [];
        if (option.name === undefined || option.name.length === 0) {
            arrErr.push("name"), (option.name = "");
        }
        if (option.author === undefined || option.author.length === 0) {
            arrErr.push("author"), (option.author = "");
        }
        if (option.year === undefined) {
            arrErr.push("year"), (option.year = 1000);
        }
        if (option.active === undefined) {
            option.active = true;
        }
        if (option.genre === undefined || option.genre.length === 0) {
            option.genre = [];
        }
        var fullCheck = arrErr.length === 0 ? true : false;
        if (fullCheck) {
            if (currentUser.getActive() &&
                currentUser.role.indexOf(users_1.Role.librarian) >= 0) {
                var newBook = new Book((this.finalId += 1), option.name, option.author, option.genre, option.year, option.active);
                this.books.push(newBook);
            }
            else {
                console.log("Для добавления книги обратитесь к библиотекарю.");
            }
        }
        else {
            console.log("Заполните name, author и year.");
        }
    };
    // ставим пометку, что книга не активена
    Catalog.prototype.deleteBook = function (currentUser, changeBook) {
        if (currentUser.getActive() &&
            currentUser.role.indexOf(users_1.Role.librarian) >= 0) {
            changeBook.librarianSetActive(currentUser, false);
        }
        else {
            console.log("Обратитесь к библиотекарю.");
        }
    };
    // Редактирование книги
    Catalog.prototype.editBook = function (currentUser, changeBook, option) {
        if (currentUser.getActive() &&
            currentUser.role.indexOf(users_1.Role.librarian) >= 0) {
            for (var key in option) {
                switch (key) {
                    case "id":
                        break;
                    case "genre":
                        if (typeof option.genre === "undefined") {
                            option.genre = [];
                        }
                        else {
                            changeBook.genre = __spreadArray([], option.genre, true);
                        }
                        break;
                    case "active":
                        if (typeof option.active === "boolean") {
                            changeBook.librarianSetActive(currentUser, option.active);
                        }
                        break;
                    default:
                        changeBook[key] = option[key];
                }
            }
        }
        else {
            console.log("Обратитесь к библиотекарю.");
        }
    };
    return Catalog;
}());
exports.Catalog = Catalog;
