import { Book } from "./catalog";
import { compareUserValue } from "./generalmethods";

enum Role {
  admin = "Administrator",
  reader = "Reader",
  librarian = "Librarian",
}

class User {
  readonly id: number;
  name: string;
  email: string;
  role: Role[];
  readonly favorites: number[];
  private active: boolean;

  constructor(
    id: number,
    name: string,
    email: string,
    role: Role[] | undefined,
    active: boolean
  ) {
    this.name = name;
    this.email = email;

    if (role === undefined) {
      this.role = [Role.reader];
    } else {
      this.role = [...role];
      if (this.role.indexOf(Role.reader) === -1) {
        this.role.push(Role.reader);
      }
    }

    this.favorites = [];
    this.id = id;
    this.setActive(active);
  }

  private setActive(active: boolean) {
    this.active = active;
  }

  adminSetActive(currentUser: User, active: boolean) {
    if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
      this.active = active;
    }
  }

  getId() {
    return this.id;
  }
  getActive() {
    return this.active;
  }

  // добавить книги в список "Избранное".
  postFavorites(id: number) {
    this.favorites.push(id);
  }
  // удалить книги из списка "Избранное".
  deleteFavorites(id: number) {
    let elIndex = this.favorites.indexOf(id);
    if (elIndex >= 0) {
      delete this.favorites[elIndex];
    }
  }
}

class UserFilter {
  id?: number;
  name?: string;
  email?: string;
  role?: Role[];
  active?: boolean;
}

// Библиотека - управление пользователями
class Library {
  private finalId: number = 0;
  private users: User[];

  constructor() {
    this.users = [];
  }
  // создаем главного пользователя
  createGod() {
    if (this.users.length === 0) {
      const newuser = new User(
        (this.finalId += 1),
        "god",
        "heaven@library.ru",
        [Role.admin, Role.librarian],
        true
      );
      this.users.push(newuser);

      return newuser;
    } else {
      console.log("Не может быть 2 бога, ибо Бог един.");
      return this.users[0];
    }
  }
  // имитация входа под супер пользователем
  LogInGod() {
    if (this.users.length > 0) {
      return this.users[0];
    } else {
      return this.createGod();
    }
  }

  // получаем пользователя
  getUserByID(currentUser: User, id: number) {
    if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
      let findUsers = this.users.filter((item, index, arr) => {
        // console.log(item, index, arr);
        return item.id == id;
      });
      const findUser =
        findUsers.length > 0
          ? findUsers[0]
          : new User(
              (this.finalId += 1),
              "name",
              "email",
              [Role.reader],
              false
            );

      if (findUser === undefined) {
        console.log("Пользователь отсутствует.");

        return new User(
          (this.finalId += 1),
          "name",
          "email",
          [Role.reader],
          false
        );
      } else {
        return findUser;
      }
    } else {
      console.log("Обратитесь к администратору.");
    }

    return new User((this.finalId += 1), "name", "email", [Role.reader], false);
  }

  // получить список пользователей на основании фильтра.
  getUsers(currentUser: User, option: UserFilter) {
    if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
      let findUsers = [...this.users];
      for (let key in option) {
        findUsers = findUsers.filter((item, index, arr) => {
          return compareUserValue(item, option, key);
        });
      }
      return findUsers;
    } else {
      console.log(
        "Для получения списка пользователей обратитесь к администратору."
      );
    }
    return currentUser;
  }

  // создаем пользователя
  сreatUser(currentUser: User, option: UserFilter) {
    let arrErr: string[] = [];
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

    let fullCheck: boolean = arrErr.length === 0 ? true : false;

    if (fullCheck) {
      if (
        currentUser.getActive() &&
        currentUser.role.indexOf(Role.admin) >= 0
      ) {
        const newuser = new User(
          (this.finalId += 1),
          option.name,
          option.email,
          option.role,
          option.active
        );
        this.users.push(newuser);
      } else {
        console.log("Для создания пользователя обратитесь к администратору.");
      }
    } else {
      console.log("Заполните name и email.");
    }
  }

  // ставим пометку, что пользователь не активен
  deleteUser(currentUser: User, changeUser: User) {
    if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
      changeUser.adminSetActive(currentUser, false);
    } else {
      console.log("Обратитесь к администратору.");
    }
  }

  // Редактирование пользователей
  editUser(currentUser: User, changeUser: User, option: UserFilter) {
    if (currentUser.getActive() && currentUser.role.indexOf(Role.admin) >= 0) {
      for (let key in option) {
        switch (key) {
          case "id":
            break;
          case "role":
            if (option.role === undefined) {
              option.role = [Role.reader];
            } else {
              changeUser.role = [...option.role];
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
    } else {
      console.log("Обратитесь к администратору.");
    }
  }
}

export { Role, User, Library, UserFilter };
