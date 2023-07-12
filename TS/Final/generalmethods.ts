import { Library, User, UserFilter, Role } from "./users";
import { Catalog, Book, BookFilter, Genre  } from "./catalog";

// проверяем свойства пользователей и фильтра
function compareUserValue(value1: User, value2: UserFilter, key: string) {
    
    let isTrue = true

    if (key === "role") {
        if (typeof value2.role  === "undefined") {
            return isTrue
        }
        for (let item of value2.role) {

            if (value1.role.indexOf(item) === -1) {
                isTrue = false
            }
        }

    } else if (key === "active") {

        return value1.getActive() === value2[key]

    } else {
  
        return value1[key] === value2[key]
    }

    return isTrue
}

// проверяем свойства книг и фильтра
function compareBooksValue(value1: Book, value2: BookFilter, key: string) {
    
    let isTrue = true

    if (key === "genre") {
        if (typeof value2.genre  === "undefined") {
            return isTrue
        }
        for (let item of value2.genre) {

            if (value1.genre.indexOf(item) === -1) {
                isTrue = false
            }
        }

    } else if (key === "active") {

        return value1.getActive() === value2[key]

    } else {
  
        return value1[key] === value2[key]
    }

    return isTrue
}


export {compareUserValue, compareBooksValue}