import { User, Role } from "./users";

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

    constructor (id: number, name: string, author: string, genre: Genre[], year: number, active:boolean) {
        this.id         = id;
        this.name       = name;
        this.author     = author;
        this.genre      = [...genre];
        this.year       = year;
        this.setActive(active);
    }

    private setActive(active: boolean) {
        this.active = active
    }
    
    getId() {
        return this.id
    }

    getActive() {
        return this.active
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


class Catalog {
    private finalId: number = 0;
    private books: Book[]

    constructor(){
        this.books = []
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


        console.log("книга добавлена");
        
    }




}


export { Genre, Book, BookFilter, Catalog}