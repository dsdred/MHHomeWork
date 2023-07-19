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
exports.UserFilter = exports.Library = exports.User = exports.Role = void 0;
var generalmethods_1 = require("./generalmethods");
var Role;
(function (Role) {
    Role["admin"] = "Administrator";
    Role["reader"] = "Reader";
    Role["librarian"] = "Librarian";
})(Role || (exports.Role = Role = {}));
var User = /** @class */ (function () {
    function User(id, name, email, role, active) {
        this.name = name;
        this.email = email;
        if (role === undefined) {
            this.role = [Role.reader];
        }
        else {
            this.role = __spreadArray([], role, true);
            if (this.role.indexOf(Role.reader) === -1) {
                this.role.push(Role.reader);
            }
        }
        this.favorites = [];
        this.id = id;
        this.setActive(active);
    }
    User.prototype.setActive = function (active) {
        this.active = active;
    };
    User.prototype.adminSetActive = function (currentUser, active) {
        if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
            this.active = active;
        }
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getActive = function () {
        return this.active;
    };
    // добавить книги в список "Избранное".
    User.prototype.postFavorites = function (id) {
        this.favorites.push(id);
    };
    // удалить книги из списка "Избранное".
    User.prototype.deleteFavorites = function (id) {
        var elIndex = this.favorites.indexOf(id);
        if (elIndex >= 0) {
            delete this.favorites[elIndex];
        }
    };
    return User;
}());
exports.User = User;
var UserFilter = /** @class */ (function () {
    function UserFilter() {
    }
    return UserFilter;
}());
exports.UserFilter = UserFilter;
// Библиотека - управление пользователями
var Library = /** @class */ (function () {
    function Library() {
        this.finalId = 0;
        this.users = [];
    }
    // создаем главного пользователя
    Library.prototype.createGod = function () {
        if (this.users.length === 0) {
            var newuser = new User((this.finalId += 1), "god", "heaven@library.ru", [Role.admin, Role.librarian], true);
            this.users.push(newuser);
            return newuser;
        }
        else {
            console.log("Не может быть 2 бога, ибо Бог един.");
            return this.users[0];
        }
    };
    // имитация входа под супер пользователем
    Library.prototype.LogInGod = function () {
        if (this.users.length > 0) {
            return this.users[0];
        }
        else {
            return this.createGod();
        }
    };
    // получаем пользователя
    Library.prototype.getUserByID = function (currentUser, id) {
        if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
            var findUsers = this.users.filter(function (item, index, arr) {
                // console.log(item, index, arr);
                return item.id == id;
            });
            var findUser = findUsers.length > 0
                ? findUsers[0]
                : new User((this.finalId += 1), "name", "email", [Role.reader], false);
            if (findUser === undefined) {
                console.log("Пользователь отсутствует.");
                return new User((this.finalId += 1), "name", "email", [Role.reader], false);
            }
            else {
                return findUser;
            }
        }
        else {
            console.log("Обратитесь к администратору.");
        }
        return new User((this.finalId += 1), "name", "email", [Role.reader], false);
    };
    // получить список пользователей на основании фильтра.
    Library.prototype.getUsers = function (currentUser, option) {
        if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
            var findUsers = __spreadArray([], this.users, true);
            var _loop_1 = function (key) {
                findUsers = findUsers.filter(function (item, index, arr) {
                    return (0, generalmethods_1.compareUserValue)(item, option, key);
                });
            };
            for (var key in option) {
                _loop_1(key);
            }
            return findUsers;
        }
        else {
            console.log("Для получения списка пользователей обратитесь к администратору.");
        }
        return currentUser;
    };
    // создаем пользователя
    Library.prototype.сreatUser = function (currentUser, option) {
        var arrErr = [];
        if (option.name === undefined || option.name.length === 0) {
            arrErr.push("name"), (option.name = "");
        }
        if (option.email === undefined || option.email.length === 0) {
            arrErr.push("email"), (option.email = "");
        }
        if (option.role === undefined || option.role.length === 0) {
            option.role = [Role.reader];
        }
        if (option.active === undefined) {
            option.active = true;
        }
        var fullCheck = arrErr.length === 0 ? true : false;
        if (fullCheck) {
            if (currentUser.getActive() &&
                currentUser.role.indexOf(Role.admin) >= 0) {
                var newuser = new User((this.finalId += 1), option.name, option.email, option.role, option.active);
                this.users.push(newuser);
            }
            else {
                console.log("Для создания пользователя обратитесь к администратору.");
            }
        }
        else {
            console.log("Заполните name и email.");
        }
    };
    // ставим пометку, что пользователь не активен
    Library.prototype.deleteUser = function (currentUser, changeUser) {
        if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
            changeUser.adminSetActive(currentUser, false);
        }
        else {
            console.log("Обратитесь к администратору.");
        }
    };
    // Редактирование пользователей
    Library.prototype.editUser = function (currentUser, changeUser, option) {
        if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
            for (var key in option) {
                switch (key) {
                    case "id":
                        break;
                    case "role":
                        if (option.role === undefined) {
                            option.role = [Role.reader];
                        }
                        else {
                            changeUser.role = __spreadArray([], option.role, true);
                            if (changeUser.role.indexOf(Role.reader) === -1) {
                                changeUser.role.push(Role.reader);
                            }
                        }
                        break;
                    case "active":
                        if (typeof option.active === "boolean") {
                            changeUser.adminSetActive(currentUser, option.active);
                        }
                        break;
                    default:
                        changeUser[key] = option[key];
                }
            }
        }
        else {
            console.log("Обратитесь к администратору.");
        }
    };
    return Library;
}());
exports.Library = Library;
