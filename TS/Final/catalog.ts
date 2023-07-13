import { User, Role } from "./users";
import { compareBooksValue } from "./generalmethods";

// Жанры книг
enum Genre {
    comedy      = "Comedy",
    thriller    = "Thriller",
    poems       = "Poems",
    fantasy     = "Fantasy",
    business    = "Business",
    psychology  = "Psychology",
    theory      = "Theory",
    novel       = "Novel",
    history     = "History",
};

class Book {
    readonly id:    number
    name:           string
    author:         string
    genre:          Genre[]
    year:           number
    private active: boolean
    review:         BookReview[]

    constructor (id: number, name: string, author: string, genre: Genre[], year: number, active:boolean) {
        this.id         = id;
        this.name       = name;
        this.author     = author;
        this.genre      = [...genre];
        this.year       = year;
        this.setActive(active);
        this.review     = [];
    }

    private setActive(active: boolean) {
        this.active = active
    }
    librarianSetActive(currentUser: User, active: boolean) {
        if (currentUser.getActive() && currentUser.role.indexOf(Role.librarian) >= 0) {
            this.active = active
        }
    }
    getId() {
        return this.id
    }
    getActive() {
        return this.active
    }

    // добавить отзыв на книгу.
    postReview (review:BookReview) {
        this.review.push(review)
    }


}

class BookFilter {
    id?:        number
    name?:      string
    author?:    string
    genre?:     Genre[]
    year?:      number
    active?:    boolean
}

class BookReview {
    userid: number
    review: string
    grade:  number
}

class Catalog {
    private finalId:    number = 0;
    private books:      Book[]

    constructor(){
        this.books = []
    }

    // получаем книгу
    getBookByID(id:number) {

        let findBooks = this.books.filter( (item, index, arr) => {
            return item.id === id
        } )
        const findBook = (findBooks.length>0) ? findBooks[0]: 
            new Book(this.finalId +=1, "name", "author", [], 1000, false);
    
        if (typeof findBook === "undefined") {
    
            console.log('Книга отсутствует.');
    
            return new Book(this.finalId +=1, "name", "author", [], 1001, false);
    
        } else {
    
            return findBook

        }
    }

    // получить список книг на основании фильтра.
    getBooks(option: BookFilter){
        let findBooks = [...this.books]
        for (let key in option) {
            findBooks = findBooks.filter( (item, index, arr) => {
                return compareBooksValue(item, option, key)
            } )
        }
        return findBooks
    }

    // создаем книгу
    postBook(currentUser: User, option:BookFilter){
        let arrErr:string[] = []; 
        if (typeof option.name      == "undefined") {arrErr.push('name'),   option.name     = ""}
        if (typeof option.author    == "undefined") {arrErr.push('author'), option.author   = ""}
        if (typeof option.year      == "undefined") {arrErr.push('year'),   option.year     = 1000}
        if (typeof option.active    == "undefined") {option.active = true}
        if (typeof option.genre     == "undefined" || option.genre.length === 0) {option.genre = []}
        
        let fullCheck:boolean = (arrErr.length === 0)? true: false;
        if (fullCheck) {
            if (currentUser.getActive() && currentUser.role.indexOf(Role.librarian) >= 0) {

                const newBook = new Book(this.finalId +=1, option.name, option.author, option.genre, option.year, option.active);
                this.books.push(newBook);

            } else {
                console.log('Для добавления книги обратитесь к библиотекарю.');
            }
        }  else {
            console.log('Заполните name, author и year.');
        }
    }

    // ставим пометку, что книга не активена
    deleteBook(currentUser: User, changeBook:Book){
        if (currentUser.getActive() && currentUser.role.indexOf(Role.librarian) >= 0) {

            changeBook.librarianSetActive(currentUser, false)

        } else {
            console.log('Обратитесь к библиотекарю.');
        }
    }

    // Редактирование книги
    putBook(currentUser: User, changeBook:Book, option: BookFilter){
        if (currentUser.getActive() && currentUser.role.indexOf(Role.librarian) >= 0) {
                
            for (let key in option) {
                if (key != "id") {
                    if (key === "genre") {
                        if (typeof option.genre === "undefined") {option.genre   = []}
                        else {
                            changeBook.genre = [...option.genre]
                        }
                    } else if (key === "active") {
                        if (typeof option.active === 'boolean') {
                            changeBook.librarianSetActive(currentUser, option.active)
                        }
                    } else {
                        changeBook[key] = option[key]
                    }
                }
            }
        } else {
            console.log('Обратитесь к библиотекарю.');
        }
    }


}


export { Genre, Book, BookFilter, Catalog, BookReview}