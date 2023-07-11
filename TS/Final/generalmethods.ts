import { Library, User, UserFilter, Role } from "./users";

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

export {compareUserValue}