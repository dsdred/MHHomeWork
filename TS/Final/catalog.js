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
exports.Catalog = exports.BookFilter = exports.Book = exports.Genre = void 0;
var users_1 = require("./users");
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
;
var Book = /** @class */ (function () {
    function Book(id, name, author, genre, year, active) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.genre = __spreadArray([], genre, true);
        this.year = year;
        this.setActive(active);
    }
    Book.prototype.setActive = function (active) {
        this.active = active;
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getActive = function () {
        return this.active;
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
var Catalog = /** @class */ (function () {
    function Catalog() {
        this.finalId = 0;
        this.books = [];
    }
    // создаем книгу
    Catalog.prototype.postBook = function (currentUser, option) {
        var arrErr = [];
        if (typeof option.name == "undefined") {
            arrErr.push('name'), option.name = "";
        }
        if (typeof option.author == "undefined") {
            arrErr.push('author'), option.author = "";
        }
        if (typeof option.year == "undefined") {
            arrErr.push('year'), option.year = 1000;
        }
        if (typeof option.active == "undefined") {
            option.active = true;
        }
        if (typeof option.genre == "undefined" || option.genre.length === 0) {
            option.genre = [];
        }
        var fullCheck = (arrErr.length === 0) ? true : false;
        if (fullCheck) {
            if (currentUser.getActive() && currentUser.role.indexOf(users_1.Role.librarian) >= 0) {
                var newBook = new Book(this.finalId += 1, option.name, option.author, option.genre, option.year, option.active);
                this.books.push(newBook);
            }
            else {
                console.log('Для добавления книги обратитесь к библиотекарю.');
            }
        }
        else {
            console.log('Заполните name, author и year.');
        }
        console.log("книга добавлена");
    };
    return Catalog;
}());
exports.Catalog = Catalog;
