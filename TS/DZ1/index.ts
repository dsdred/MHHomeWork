// Задание 1
// Напишите функцию, которая принимает 2 объекта в виде аргументов и возвращает новый объект
// который состоит из всех полей объектов на входе. Аргументы функции должны быть заданы интерфейсами.
// Например: User, UserAddress или Book, BookAuthor
// Возвращаемое значение должно быть задано интерфейсом, который состоит из всех полей объектов на входе.
interface UserI {
    id: number;
    name: string;
    active: boolean;
}

interface IndividualI {
    jobtitle: string;
}

const newUser: UserI = {
    id: 13,
    name: 'Dmitry',
    active: true,
}

const newIndividual: IndividualI = {
    jobtitle: 'programmer',
}

function newWorcer (newUser:UserI,  newIndividual: IndividualI) {
    return {...newUser,...newIndividual}
}

console.log(newWorcer(newUser, newIndividual));


// Задание 2
// Сделайте задание 1, но вместо интерфейсов используйте type.
// Подумайте, в чем разница между type и interface.
type UserT = {
    id: number;
    name: string;
    active: boolean;
}

type IndividualT  = {
    jobtitle: string;
}

const newUserT: UserT = {
    id: 13,
    name: 'Dmitry',
    active: true,
}

const newIndividualT: IndividualT = {
    jobtitle: 'programmer',
}

console.log(newWorcer(newUserT, newIndividualT));

// Задание 3
// Напишите Union тип, который может принимать значения string, number, boolean, null, undefined, object
// Напишите функцию, принимает на вход этот Union Type и возвращает строку
// с названием типа аргумента
// Если аргумент - строка, то вернуть "string"
// Если аргумент - число, то вернуть "number"
// Если аргумент - булево, то вернуть "boolean"
// Если аргумент - null, то вернуть "null"
// Если аргумент - undefined, то вернуть "undefined"
// Если аргумент - объект, то вернуть "object"

type SomeValue = string | number | boolean | null | undefined | object

function WhatIsThis (someValue: SomeValue) {
    return someValue === null ? 'null' : (typeof someValue)
}

console.log('строка: ',     WhatIsThis('Вася'));
console.log('число: ',      WhatIsThis(13));
console.log('булево: ',     WhatIsThis(true));
console.log('null: ',       WhatIsThis(null));
console.log('undefined: ',  WhatIsThis(undefined));
console.log('объект: ',     WhatIsThis({}));

// Задание 4
// Напишите Enum, который содержит 3 значения: Admin, Manager, User
// Напишите функцию, которая принимает на вход Enum и возвращает строку
// с названием Enum.
enum UserType {
    Admin   = "ADMIN", 
    Manager = "MANAGER", 
    User    = "USER",
}

function getUserType(userType: UserType) {
    return userType
}

console.log(getUserType(UserType.Admin));
console.log(getUserType(UserType.Manager));
console.log(getUserType(UserType.User));

// Задание 5
// Напиши функцию, которая на вход принимает Tuple из 4х элементов:
// 1. Имя пользователя
// 2. Фамилию пользователя
// 3. Возраст пользователя
// 4. Пол пользователя
//
// Функция должна вернуть объект типа User, который будет содержать поля:
// 1. Имя пользователя
// 2. Фамилию пользователя
// 3. Возраст пользователя
// 4. Пол пользователя
type User = {
    name: string,
    surname: string,
    age: number,
    sex: string
}


function getUser(person:[string,string,number,string]) {
    const newUser: User = { name: person[0], surname: person[1], age: person[2], sex: person[3]}
    return newUser
}

console.log(getUser(['Dmitry','Sidorenko',40,'M']));
