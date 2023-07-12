import { Library, User, Role, UserFilter } from "./users";
import { Catalog, Book, BookFilter, Genre  } from "./catalog";

function addUsers (myLibrary: Library, godUser: User) {
// https://www.mockaroo.com/ - generate mockdata
    const msUsers = 
    [{name:"Ellwood",   email:"erevelle0@sphinn.com",           role:[Role.reader],     active:true},
    {name:"Benny",      email:"bdransfield1@mit.edu",           role:[Role.reader],     active:true},
    {name:"Loralyn",    email:"ltrever2@sina.com.cn",           role:[Role.reader],     active:true},
    {name:"Paxon",      email:"pmcilwreath3@naver.com",         role:[Role.librarian],  active:true},
    {name:"Codie",      email:"cgrestye4@chronoengine.com",     role:[Role.librarian],  active:true},
    {name:"Odelinda",   email:"oellingworth5@va.gov",           role:[Role.librarian],  active:false},
    {name:"Moore",      email:"msanderson6@jiathis.com",        role:[Role.reader],     active:false},
    {name:"Kaile",      email:"kjoiris7@abc.net.au",            role:[],                active:true},
    {name:"Alexander",  email:"aevitts8@hud.gov",               role:[Role.reader],     active:true},
    {name:"Emma",       email:"epieroni9@multiply.com",         role:[Role.reader],     active:false},
    {name:"Amalea",     email:"aflasbya@about.me",              role:[],                active:true},
    {name:"Archibold",  email:"astitb@vimeo.com",               role:[Role.reader],     active:true},
    {name:"Kelli",      email:"kworsnipc@bravesites.com",       role:[Role.reader],     active:false},
    {name:"Riva",       email:"rrochesterd@mozilla.org",        role:[],                active:false},
    {name:"Eunice",     email:"ekochse@baidu.com",              role:[Role.librarian],  active:true},
    {name:"Kriste",     email:"koleksiakf@kickstarter.com",     role:[Role.reader],     active:false},
    {name:"Angelina",   email:"alampensg@sina.com.cn",          role:[Role.librarian],  active:true},
    {name:"Esme",       email:"efearnehoughh@unc.edu",          role:[Role.reader],     active:true},
    {name:"Gail",       email:"gcavelli@ted.com",               role:[Role.librarian],  active:true},
    {name:"Ronnica",    email:"rgreenlessj@ox.ac.uk",           role:[Role.reader],     active:false},
    {name:"Annalee",    email:"awalbridgek@techcrunch.com",     role:[Role.reader],     active:false},
    {name:"Susanne",    email:"sabraml@angelfire.com",          role:[Role.reader],     active:false},
    {name:"Maisie",     email:"mbaconm@arstechnica.com",        role:[Role.librarian],  active:false},
    {name:"Baird",      email:"bleffekn@nhs.uk",                role:[Role.reader],     active:false},
    {name:"Richie",     email:"rfrancklyno@google.cn",          role:[Role.librarian],  active:true},
    {name:"Town",       email:"tmarchingtonp@geocities.jp",     role:[Role.reader],     active:false},
    {name:"Shelley",    email:"smayberryq@shareasale.com",      role:[Role.librarian],  active:false},
    {name:"Hakim",      email:"hhallahanr@who.int",             role:[Role.reader],     active:true},
    {name:"Eadmund",    email:"edoylys@craigslist.org",         role:[Role.librarian],  active:true},
    {name:"Keslie",     email:"klobellt@independent.co.uk",     role:[Role.reader],     active:true},
    {name:"Nadya",      email:"nmcclaughlinu@businessweek.com", role:[Role.reader],     active:true},
    {name:"Everard",    email:"egettingsv@bigcartel.com",       role:[Role.reader],     active:false},
    {name:"Benedikta",  email:"bdahlenw@sourceforge.net",       role:[Role.librarian],  active:false},
    {name:"Nolly",      email:"nbizleyx@biglobe.ne.jp",         role:[Role.librarian],  active:true},
    {name:"Ricoriki",   email:"rdelayglesiay@fc2.com",          role:[Role.librarian],  active:false},
    {name:"Letty",      email:"lkurtz@smh.com.au",              role:[Role.librarian],  active:false},
    {name:"Michael",    email:"mgamon10@imdb.com",              role:[Role.librarian],  active:false},
    {name:"Lilly",      email:"lkrollmann11@51.la",             role:[Role.reader],     active:false},
    {name:"Lorin",      email:"lespinha12@symantec.com",        role:[Role.librarian],  active:false},
    {name:"Karna",      email:"kpeacop13@1und1.de",             role:[Role.librarian],  active:false},
    {name:"Carolynn",   email:"cshimman14@mlb.com",             role:[Role.reader],     active:true},
    {name:"Danie",      email:"dnegal15@fda.gov",               role:[Role.librarian],  active:false},
    {name:"Joelynn",    email:"jcolaton16@myspace.com",         role:[Role.librarian],  active:true},
    {name:"Sindee",     email:"sniezen17@discovery.com",        role:[Role.reader],     active:true},
    {name:"Clari",      email:"cfranzonetti18@scribd.com",      role:[Role.reader],     active:false},
    {name:"Brita",      email:"bpalliser19@columbia.edu",       role:[Role.reader],     active:false},
    {name:"Ebonee",     email:"ehumpage1a@netvibes.com",        role:[Role.librarian],  active:false},
    {name:"Berkeley",   email:"bbyk1b@icio.us",                 role:[Role.librarian],  active:true},
    {name:"Tiffanie",   email:"ttomaskunas1c@tinypic.com",      role:[Role.reader],     active:true},
    {name:"Hartwell",   email:"hmccuaig1d@indiatimes.com",      role:[Role.librarian],  active:false},
    {name:"Sigfrid",    email:"sbelvard1e@about.com",           role:[Role.librarian],  active:true},
    {name:"Krystyna",   email:"kpassey1f@ocn.ne.jp",            role:[Role.reader],     active:true},
    {name:"Lacee",      email:"lprendergrast1g@loc.gov",        role:[Role.reader],     active:true},
    {name:"Nate",       email:"nkeitley1h@marketwatch.com",     role:[Role.reader],     active:true},
    {name:"Julieta",    email:"jpessler1i@cnn.com",             role:[Role.librarian],  active:false},
    {name:"Lindsay",    email:"lbwye1j@gnu.org",                role:[Role.reader],     active:false},
    {name:"Corabelle",  email:"cpolo1k@google.com.br",          role:[Role.librarian],  active:false},
    {name:"Simonne",    email:"srochell1l@ox.ac.uk",            role:[Role.librarian],  active:true},
    {name:"Flinn",      email:"frenihan1m@odnoklassniki.ru",    role:[Role.librarian],  active:false},
    {name:"Vere",       email:"visaacs1n@prweb.com",            role:[Role.librarian],  active:true},
    {name:"Romonda",    email:"rgathercoal1o@pbs.org",          role:[Role.librarian],  active:false},
    {name:"Siouxie",    email:"smarder1p@senate.gov",           role:[Role.librarian],  active:false},
    {name:"Katy",       email:"kadamovich1q@odnoklassniki.ru",  role:[Role.librarian],  active:true},
    {name:"Tilly",      email:"thalliburton1r@woothemes.com",   role:[Role.librarian],  active:true},
    {name:"Cinderella", email:"crutherford1s@usa.gov",          role:[Role.reader],     active:false},
    {name:"Roseann",    email:"rbaldwin1t@g.co",                role:[Role.librarian],  active:false},
    {name:"Fabe",       email:"fspeedy1u@accuweather.com",      role:[Role.librarian],  active:false},
    {name:"Nerita",     email:"ntosney1v@ftc.gov",              role:[Role.reader],     active:true},
    {name:"Kristal",    email:"kkyme1w@hubpages.com",           role:[Role.reader],     active:false},
    {name:"Svend",      email:"smckim1x@state.gov",             role:[Role.librarian],  active:true},
    {name:"Danie",      email:"dandrioni1y@blogger.com",        role:[Role.librarian],  active:false},
    {name:"Daveen",     email:"dnickoll1z@macromedia.com",      role:[Role.librarian],  active:false},
    {name:"Lazaro",     email:"lellen20@360.cn",                role:[Role.reader],     active:true},
    {name:"Al",         email:"amartignon21@springer.com",      role:[Role.reader],     active:true},
    {name:"Chev",       email:"cmcenhill22@webs.com",           role:[Role.reader],     active:true},
    {name:"Jana",       email:"jgrimmett23@webmd.com",          role:[Role.librarian],  active:true},
    {name:"Jobina",     email:"jfaltin24@baidu.com",            role:[Role.librarian],  active:true},
    {name:"Cully",      email:"csills25@japanpost.jp",          role:[Role.reader],     active:true},
    {name:"Deane",      email:"dspottswood26@ycombinator.com",  role:[Role.librarian],  active:true},
    {name:"Forbes",     email:"fbushell27@google.co.jp",        role:[Role.reader],     active:false},
    {name:"Luke",       email:"labella28@state.gov",            role:[Role.librarian],  active:false},
    {name:"Neddie",     email:"nhyrons29@yolasite.com",         role:[Role.reader],     active:false},
    {name:"Lissi",      email:"lfilipczynski2a@vk.com",         role:[Role.librarian],  active:false},
    {name:"Lita",       email:"lhawtry2b@intel.com",            role:[Role.librarian],  active:false},
    {name:"Sharai",     email:"scahalan2c@stumbleupon.com",     role:[Role.reader],     active:true},
    {name:"Jedd",       email:"jperkins2d@imdb.com",            role:[Role.librarian],  active:true},
    {name:"Dieter",     email:"dpryn2e@gmpg.org",               role:[Role.librarian],  active:false},
    {name:"Clem",       email:"cdwelley2f@google.com",          role:[Role.librarian],  active:true},
    {name:"Balduin",    email:"bkondratyuk2g@admin.ch",         role:[Role.reader],     active:false},
    {name:"Stephan",    email:"speekevout2h@buzzfeed.com",      role:[Role.reader],     active:false},
    {name:"Mildred",    email:"mcorey2i@washingtonpost.com",    role:[Role.reader],     active:true},
    {name:"Robbi",      email:"rtott2j@xinhuanet.com",          role:[Role.librarian],  active:true},
    {name:"Enriqueta",  email:"estonehewer2k@imdb.com",         role:[Role.librarian],  active:false},
    {name:"Reggi",      email:"rdunridge2l@github.io",          role:[Role.librarian],  active:false},
    {name:"Iolanthe",   email:"idowning2m@livejournal.com",     role:[Role.reader],     active:true},
    {name:"Buckie",     email:"bbrosetti2n@quantcast.com",      role:[Role.reader],     active:true},
    {name:"Herb",       email:"hkett2o@list-manage.com",        role:[Role.librarian],  active:true},
    {name:"Tanner",     email:"tbudleigh2p@flavors.me",         role:[Role.librarian],  active:true},
    {name:"Lyndsay",    email:"lleuty2q@walmart.com",           role:[Role.reader],     active:true},
    {name:"Roxie",      email:"rfalla2r@tamu.edu",              role:[Role.librarian],  active:false}]


// god   [0]
// admin [1]
    let options = new UserFilter()
    options.name        = 'Иван';
    options.email       = '911@library.ru';
    options.role        = [Role.admin];
    options.active      = true;
    
    myLibrary.postUser(godUser, options) 

// [2]-[x]
    let item: any // для обхода mock данных с последующим созданием пользователей
    for (item of msUsers){
        options             = new UserFilter()
        options.name        = item.name;
        options.email       = item.email;
        options.role        = item.role;
        options.active      = item.active;

        myLibrary.postUser(godUser, options) 
    }


}


function addBooks (myCatalog: Catalog, godUser: User) {
    // https://www.mockaroo.com/ - generate mockdata
    const msBooks = 
    [{name:"Star!",                             author:"Boris",     genre:[Genre.fantasy, Genre.history],                           year:1993,active:true},
    {name:"Wedding Trough (Vase de noces)",     author:"Avis",      genre:[Genre.poems, Genre.comedy],                              year:1999,active:false},
    {name:"Marine Story, A",                    author:"Felipa",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2007,active:true},
    {name:"Escape Me Never",                    author:"Carmelina", genre:[Genre.business],                                         year:2008,active:false},
    {name:"Secret Agent",                       author:"Lars",      genre:[Genre.thriller],                                         year:2007,active:true},
    {name:"Wicked City (Yôjû toshi)",           author:"Upton",     genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:1991,active:true},
    {name:"Pick-up Summer (Pinball Summer)",    author:"Evelyn",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2005,active:true},
    {name:"Last Wave, The",                     author:"Loren",     genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:1995,active:true},
    {name:"Tombs of the Blind Dead",            author:"Kerstin",   genre:[Genre.fantasy, Genre.history],                           year:2005,active:false},
    {name:"Riptide",                            author:"Alida",     genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2009,active:true},
    {name:"Twilight",                           author:"Alex",      genre:[Genre.business, Genre.psychology],                       year:1993,active:false},
    {name:"Assassination of a High School",     author:"Alvy",      genre:[Genre.poems, Genre.comedy],                              year:1992,active:true},
    {name:"*batteries not included",            author:"Isak",      genre:[Genre.business, Genre.psychology],                       year:2003,active:false},
    {name:"Rebirth",                            author:"Franny",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2008,active:false},
    {name:"Monkey in Winter",                   author:"Thorpe",    genre:[Genre.business],                                         year:2008,active:true},
    {name:"Holiday Affair",                     author:"Hamish",    genre:[Genre.business],                                         year:1999,active:true},
    {name:"WALL·E",                             author:"Skippie",   genre:[Genre.theory, Genre.novel],                              year:1998,active:false},
    {name:"Visit, The",                         author:"Thorpe",    genre:[Genre.poems, Genre.comedy],                              year:2002,active:false},
    {name:"Finger, The (Dedo, El)",             author:"Pearle",    genre:[Genre.business, Genre.psychology],                       year:1986,active:true},
    {name:"Pursuit of Happyness, The",          author:"Chelsey",   genre:[Genre.theory, Genre.novel],                              year:2009,active:false},
    {name:"Let My Puppets Come",                author:"Meridith",  genre:[Genre.poems, Genre.comedy],                              year:1995,active:false},
    {name:"Way... Way Out",                     author:"Gilbertina",genre:[Genre.fantasy, Genre.history],                           year:2005,active:false},
    {name:"Brothers at War",                    author:"Alta",      genre:[Genre.fantasy, Genre.history],                           year:2011,active:false},
    {name:"Brother (Brat)",                     author:"Norton",    genre:[Genre.business, Genre.psychology],                       year:1997,active:true},
    {name:"Adam & Steve",                       author:"Hana",      genre:[Genre.thriller],                                         year:2011,active:false},
    {name:"Rosemary's Baby",                    author:"Kassandra", genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:1996,active:true},
    {name:"When Darkness Falls",                author:"Jon",       genre:[Genre.theory, Genre.novel],                              year:1994,active:true},
    {name:"King of Kings, The",                 author:"Cherlyn",   genre:[Genre.fantasy, Genre.history],                           year:2007,active:true},
    {name:"American Pop",                       author:"Dorelia",   genre:[Genre.fantasy, Genre.history],                           year:1972,active:true},
    {name:"Chinoise, La",                       author:"Clevey",    genre:[Genre.thriller],                                         year:1991,active:false},
    {name:"Hotte in Paradise",                  author:"Orran",     genre:[Genre.fantasy, Genre.history],                           year:2010,active:true},
    {name:"Monsieur Lazhar",                    author:"Sharia",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2011,active:true},
    {name:"Little Secrets",                     author:"Letisha",   genre:[Genre.theory, Genre.novel],                              year:1997,active:false},
    {name:"Stag Night",                         author:"Daisey",    genre:[Genre.fantasy, Genre.history],                           year:1986,active:false},
    {name:"Point Men, The",                     author:"Toni",      genre:[Genre.fantasy, Genre.history],                           year:2006,active:true},
    {name:"Cape Fear",                          author:"Tersina",   genre:[Genre.business],                                         year:2006,active:true},
    {name:"Victor/Victoria",                    author:"Sullivan",  genre:[Genre.thriller],                                         year:2010,active:true},
    {name:"Lionheart",                          author:"Greer",     genre:[Genre.fantasy, Genre.history],                           year:1995,active:true},
    {name:"They Wait",                          author:"Devondra",  genre:[Genre.business],                                         year:1996,active:false},
    {name:"Vito",                               author:"Tamera",    genre:[Genre.business, Genre.psychology],                       year:1988,active:false},
    {name:"Up Periscope",                       author:"Allx",      genre:[Genre.business],                                         year:1988,active:false},
    {name:"Crucified Lovers",                   author:"Lacee",     genre:[Genre.business, Genre.psychology],                       year:1969,active:false},
    {name:"Aks",                                author:"Christean", genre:[Genre.theory, Genre.novel],                              year:2006,active:false},
    {name:"The Blood of Fu Manchu",             author:"Arin",      genre:[Genre.theory, Genre.novel],                              year:1996,active:false},
    {name:"Cold in July",                       author:"Nate",      genre:[Genre.theory, Genre.novel],                              year:1998,active:true},
    {name:"Flying Machines",                    author:"Gardiner",  genre:[Genre.poems, Genre.comedy],                              year:2010,active:false},
    {name:"Call Me Madam",                      author:"Taite",     genre:[Genre.poems, Genre.comedy],                              year:1997,active:true},
    {name:"3 dev adam (Three Giant Men) ",      author:"Brit",      genre:[Genre.business, Genre.psychology],                       year:2012,active:true},
    {name:"Adonis Factor, The",                 author:"Parrnell",  genre:[Genre.business],                                         year:1989,active:false},
    {name:"Horrible Bosses",                    author:"Elsa",      genre:[Genre.business],                                         year:1988,active:true},
    {name:"Screamers",                          author:"Georgetta", genre:[Genre.fantasy, Genre.history],                           year:1961,active:true},
    {name:"Once My Mother",                     author:"Melisande", genre:[Genre.business],                                         year:2008,active:true},
    {name:"Bridge to Terabithia",               author:"Olav",      genre:[Genre.business, Genre.psychology],                       year:2007,active:true},
    {name:"Birdcage Inn (Paran daemun)",        author:"Irina",     genre:[Genre.theory, Genre.novel],                              year:2003,active:false},
    {name:"Bad Johnson",                        author:"Orella",    genre:[Genre.theory, Genre.novel],                              year:2009,active:true},
    {name:"See You in the Morning",             author:"Lindy",     genre:[Genre.theory, Genre.novel],                              year:2001,active:true},
    {name:"Werner - Gekotzt wird später",       author:"Andrej",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2011,active:true},
    {name:"Caesar Must Die",                    author:"Skipper",   genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:1987,active:true},
    {name:"Whatever Happened to Harold Smith?", author:"Jarrid",    genre:[Genre.theory, Genre.novel],                              year:2009,active:true},
    {name:"Conformist, The (Conformista, Il)",  author:"Aleksandr", genre:[Genre.theory, Genre.novel],                              year:2009,active:false},
    {name:"Stiff Upper Lips",                   author:"Athena",    genre:[Genre.business],                                         year:2007,active:true},
    {name:"Wolfman, The",                       author:"Mollee",    genre:[Genre.fantasy, Genre.history],                           year:1995,active:false},
    {name:"The New Centurions",                 author:"Donielle",  genre:[Genre.business],                                         year:2000,active:true},
    {name:"Future by Design",                   author:"Vince",     genre:[Genre.business, Genre.psychology],                       year:1999,active:false},
    {name:"Terminal USA",                       author:"Alane",     genre:[Genre.fantasy, Genre.history],                           year:2006,active:true},
    {name:"These Amazing Shadows",              author:"Rainer",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:1987,active:false},
    {name:"Fallen Idol, The",                   author:"Palm",      genre:[Genre.fantasy, Genre.history],                           year:2012,active:false},
    {name:"Tempest, The",                       author:"Orv",       genre:[Genre.business, Genre.psychology],                       year:1972,active:false},
    {name:"Inside Paris (Dans Paris)",          author:"Marlin",    genre:[Genre.business],                                         year:1992,active:false},
    {name:"Dragon Age: Redemption",             author:"Curtice",   genre:[Genre.business],                                         year:2004,active:true},
    {name:"Juche Idea, The",                    author:"Truman",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2008,active:false},
    {name:"Here Comes the Devil",               author:"Pavel",     genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2003,active:true},
    {name:"Branch Reflecting on Existence",     author:"Raynor",    genre:[Genre.thriller],                                         year:2011,active:false},
    {name:"Slasher",                            author:"Issiah",    genre:[Genre.business],                                         year:2001,active:true},
    {name:"Goya's Ghosts",                      author:"Goddart",   genre:[Genre.fantasy, Genre.history],                           year:1985,active:true},
    {name:"General Died at Dawn, The",          author:"Mignonne",  genre:[Genre.poems, Genre.comedy],                              year:2005,active:true},
    {name:"Love in Another Language",           author:"Kathe",     genre:[Genre.business],                                         year:1987,active:false},
    {name:"Island of Dr. Moreau, The",          author:"Flemming",  genre:[Genre.fantasy, Genre.history],                           year:1994,active:false},
    {name:"My Weakness Is Strong",              author:"Benni",     genre:[Genre.business, Genre.psychology],                       year:2004,active:false},
    {name:"Les Feux Arctiques (Arktiset tulet)",author:"Dillie",    genre:[Genre.business, Genre.psychology],                       year:1984,active:false},
    {name:"X-Men: Days of Future Past",         author:"Laurens",   genre:[Genre.theory, Genre.novel],                              year:2006,active:true},
    {name:"Evita",                              author:"Roth",      genre:[Genre.poems, Genre.comedy],                              year:1986,active:false},
    {name:"Suzanne's Diary for Nicholas",       author:"Constantin",genre:[Genre.poems, Genre.comedy],                              year:2007,active:true},
    {name:"Dragon Ball Z: Wrath of the Dragon", author:"Nissie",    genre:[],                                                       year:2007,active:true},
    {name:"Man Who Sleeps",                     author:"Arlena",    genre:[Genre.business, Genre.psychology],                       year:2010,active:true},
    {name:"Felidae",                            author:"Shawnee",   genre:[Genre.theory, Genre.novel],                              year:1963,active:false},
    {name:"Five-Year Engagement, The",          author:"Katey",     genre:[Genre.fantasy, Genre.history],                           year:2001,active:false},
    {name:"42 Up",                              author:"Desmond",   genre:[Genre.fantasy, Genre.history],                           year:2006,active:true},
    {name:"Legacy of a Hollywood Renegade",     author:"Chauncey",  genre:[],                                                       year:1998,active:true},
    {name:"A Film About the Pixies",            author:"Collen",    genre:[Genre.fantasy, Genre.history],                           year:1995,active:true},
    {name:"Under Ten Flags",                    author:"Oneida",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:1995,active:false},
    {name:"Love Story",                         author:"Sibyl",     genre:[Genre.fantasy, Genre.history],                           year:2009,active:true},
    {name:"The War at Home",                    author:"Wendye",    genre:[Genre.poems, Genre.comedy, Genre.history, Genre.fantasy],year:2011,active:true},
    {name:"Supernova",                          author:"Martie",    genre:[Genre.business, Genre.psychology],                       year:2008,active:false},
    {name:"Chromophobia",                       author:"Ravid",     genre:[Genre.poems, Genre.comedy],                              year:1996,active:true},
    {name:"Mr. Untouchable",                    author:"Joleen",    genre:[Genre.theory, Genre.novel],                              year:1991,active:true},
    {name:"Who Killed Bambi?",                  author:"Elly",      genre:[Genre.fantasy, Genre.history],                           year:1998,active:false},
    {name:"Make Like a Thief",                  author:"Orville",   genre:[Genre.business],                                         year:1994,active:true},
    {name:"Mickey Blue Eyes",                   author:"Gusty",     genre:[Genre.theory, Genre.novel],                              year:1992,active:true},
    {name:"Carpool",                            author:"Filbert",   genre:[Genre.business, Genre.psychology],                       year:1992,active:true}]

    // [0] Дань уважения первой книге из бизнес-литературы, которую прочитал
    let newBook     = new BookFilter
    newBook.name    = "Цель"
    newBook.author  = "Элияху Голдратт"
    newBook.genre   = [Genre.business, Genre.theory]
    newBook.year    = 2014
    newBook.active  = true;
    myCatalog.postBook(godUser, newBook)

    // [1]-[x]
    let item: any // для обхода mock данных с последующим созданием пользователей
    for (item of msBooks){
        let options        = new BookFilter
        options.name       = item.name;
        options.author     = item.author;
        options.genre      = item.genre;
        options.year       = item.year;
        options.active     = item.active;

        myCatalog.postBook(godUser, options) 
    }

}


export {addUsers, addBooks}