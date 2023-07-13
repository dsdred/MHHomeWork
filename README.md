# Домашнее задание в Muthshub #

В папке TS лежит вополненное домашнее задание по TypeScript.
- DZ1 простые примеры
- DZ2 примеры с generic
- Final финальный проект "Система управления библиотекой"
  
## Описание "Системы управления библиотекой" ##

1. Файл "User.ts" содержит следующие классы
   User - пользователи.
   ##### Свойства: #####
    - readonly id:        number
    - name:               string
    - email:              string
    - role:               Role[]
    - readonly favorites: number[]
    - private active:     boolean
    ##### Функции: #####
    setActive(active: boolean) - используется для установки значения "activate". 
    - Если Истина тогда пользователь активен. 
    - Если Ложь тогда пользователь удален.

###### Пример: ######
        changeBook.librarianSetActive(currentUser, false)