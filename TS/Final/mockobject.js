"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBooks = exports.addUsers = void 0;
var users_1 = require("./users");
var catalog_1 = require("./catalog");
function addUsers(myLibrary, godUser) {
    // https://www.mockaroo.com/ - generate mockdata
    var msUsers = [{ name: "Ellwood", email: "erevelle0@sphinn.com", role: [users_1.Role.reader], active: true },
        { name: "Benny", email: "bdransfield1@mit.edu", role: [users_1.Role.reader], active: true },
        { name: "Loralyn", email: "ltrever2@sina.com.cn", role: [users_1.Role.reader], active: true },
        { name: "Paxon", email: "pmcilwreath3@naver.com", role: [users_1.Role.librarian], active: true },
        { name: "Codie", email: "cgrestye4@chronoengine.com", role: [users_1.Role.librarian], active: true },
        { name: "Odelinda", email: "oellingworth5@va.gov", role: [users_1.Role.librarian], active: false },
        { name: "Moore", email: "msanderson6@jiathis.com", role: [users_1.Role.reader], active: false },
        { name: "Kaile", email: "kjoiris7@abc.net.au", role: [], active: true },
        { name: "Alexander", email: "aevitts8@hud.gov", role: [users_1.Role.reader], active: true },
        { name: "Emma", email: "epieroni9@multiply.com", role: [users_1.Role.reader], active: false },
        { name: "Amalea", email: "aflasbya@about.me", role: [], active: true },
        { name: "Archibold", email: "astitb@vimeo.com", role: [users_1.Role.reader], active: true },
        { name: "Kelli", email: "kworsnipc@bravesites.com", role: [users_1.Role.reader], active: false },
        { name: "Riva", email: "rrochesterd@mozilla.org", role: [], active: false },
        { name: "Eunice", email: "ekochse@baidu.com", role: [users_1.Role.librarian], active: true },
        { name: "Kriste", email: "koleksiakf@kickstarter.com", role: [users_1.Role.reader], active: false },
        { name: "Angelina", email: "alampensg@sina.com.cn", role: [users_1.Role.librarian], active: true },
        { name: "Esme", email: "efearnehoughh@unc.edu", role: [users_1.Role.reader], active: true },
        { name: "Gail", email: "gcavelli@ted.com", role: [users_1.Role.librarian], active: true },
        { name: "Ronnica", email: "rgreenlessj@ox.ac.uk", role: [users_1.Role.reader], active: false },
        { name: "Annalee", email: "awalbridgek@techcrunch.com", role: [users_1.Role.reader], active: false },
        { name: "Susanne", email: "sabraml@angelfire.com", role: [users_1.Role.reader], active: false },
        { name: "Maisie", email: "mbaconm@arstechnica.com", role: [users_1.Role.librarian], active: false },
        { name: "Baird", email: "bleffekn@nhs.uk", role: [users_1.Role.reader], active: false },
        { name: "Richie", email: "rfrancklyno@google.cn", role: [users_1.Role.librarian], active: true },
        { name: "Town", email: "tmarchingtonp@geocities.jp", role: [users_1.Role.reader], active: false },
        { name: "Shelley", email: "smayberryq@shareasale.com", role: [users_1.Role.librarian], active: false },
        { name: "Hakim", email: "hhallahanr@who.int", role: [users_1.Role.reader], active: true },
        { name: "Eadmund", email: "edoylys@craigslist.org", role: [users_1.Role.librarian], active: true },
        { name: "Keslie", email: "klobellt@independent.co.uk", role: [users_1.Role.reader], active: true },
        { name: "Nadya", email: "nmcclaughlinu@businessweek.com", role: [users_1.Role.reader], active: true },
        { name: "Everard", email: "egettingsv@bigcartel.com", role: [users_1.Role.reader], active: false },
        { name: "Benedikta", email: "bdahlenw@sourceforge.net", role: [users_1.Role.librarian], active: false },
        { name: "Nolly", email: "nbizleyx@biglobe.ne.jp", role: [users_1.Role.librarian], active: true },
        { name: "Ricoriki", email: "rdelayglesiay@fc2.com", role: [users_1.Role.librarian], active: false },
        { name: "Letty", email: "lkurtz@smh.com.au", role: [users_1.Role.librarian], active: false },
        { name: "Michael", email: "mgamon10@imdb.com", role: [users_1.Role.librarian], active: false },
        { name: "Lilly", email: "lkrollmann11@51.la", role: [users_1.Role.reader], active: false },
        { name: "Lorin", email: "lespinha12@symantec.com", role: [users_1.Role.librarian], active: false },
        { name: "Karna", email: "kpeacop13@1und1.de", role: [users_1.Role.librarian], active: false },
        { name: "Carolynn", email: "cshimman14@mlb.com", role: [users_1.Role.reader], active: true },
        { name: "Danie", email: "dnegal15@fda.gov", role: [users_1.Role.librarian], active: false },
        { name: "Joelynn", email: "jcolaton16@myspace.com", role: [users_1.Role.librarian], active: true },
        { name: "Sindee", email: "sniezen17@discovery.com", role: [users_1.Role.reader], active: true },
        { name: "Clari", email: "cfranzonetti18@scribd.com", role: [users_1.Role.reader], active: false },
        { name: "Brita", email: "bpalliser19@columbia.edu", role: [users_1.Role.reader], active: false },
        { name: "Ebonee", email: "ehumpage1a@netvibes.com", role: [users_1.Role.librarian], active: false },
        { name: "Berkeley", email: "bbyk1b@icio.us", role: [users_1.Role.librarian], active: true },
        { name: "Tiffanie", email: "ttomaskunas1c@tinypic.com", role: [users_1.Role.reader], active: true },
        { name: "Hartwell", email: "hmccuaig1d@indiatimes.com", role: [users_1.Role.librarian], active: false },
        { name: "Sigfrid", email: "sbelvard1e@about.com", role: [users_1.Role.librarian], active: true },
        { name: "Krystyna", email: "kpassey1f@ocn.ne.jp", role: [users_1.Role.reader], active: true },
        { name: "Lacee", email: "lprendergrast1g@loc.gov", role: [users_1.Role.reader], active: true },
        { name: "Nate", email: "nkeitley1h@marketwatch.com", role: [users_1.Role.reader], active: true },
        { name: "Julieta", email: "jpessler1i@cnn.com", role: [users_1.Role.librarian], active: false },
        { name: "Lindsay", email: "lbwye1j@gnu.org", role: [users_1.Role.reader], active: false },
        { name: "Corabelle", email: "cpolo1k@google.com.br", role: [users_1.Role.librarian], active: false },
        { name: "Simonne", email: "srochell1l@ox.ac.uk", role: [users_1.Role.librarian], active: true },
        { name: "Flinn", email: "frenihan1m@odnoklassniki.ru", role: [users_1.Role.librarian], active: false },
        { name: "Vere", email: "visaacs1n@prweb.com", role: [users_1.Role.librarian], active: true },
        { name: "Romonda", email: "rgathercoal1o@pbs.org", role: [users_1.Role.librarian], active: false },
        { name: "Siouxie", email: "smarder1p@senate.gov", role: [users_1.Role.librarian], active: false },
        { name: "Katy", email: "kadamovich1q@odnoklassniki.ru", role: [users_1.Role.librarian], active: true },
        { name: "Tilly", email: "thalliburton1r@woothemes.com", role: [users_1.Role.librarian], active: true },
        { name: "Cinderella", email: "crutherford1s@usa.gov", role: [users_1.Role.reader], active: false },
        { name: "Roseann", email: "rbaldwin1t@g.co", role: [users_1.Role.librarian], active: false },
        { name: "Fabe", email: "fspeedy1u@accuweather.com", role: [users_1.Role.librarian], active: false },
        { name: "Nerita", email: "ntosney1v@ftc.gov", role: [users_1.Role.reader], active: true },
        { name: "Kristal", email: "kkyme1w@hubpages.com", role: [users_1.Role.reader], active: false },
        { name: "Svend", email: "smckim1x@state.gov", role: [users_1.Role.librarian], active: true },
        { name: "Danie", email: "dandrioni1y@blogger.com", role: [users_1.Role.librarian], active: false },
        { name: "Daveen", email: "dnickoll1z@macromedia.com", role: [users_1.Role.librarian], active: false },
        { name: "Lazaro", email: "lellen20@360.cn", role: [users_1.Role.reader], active: true },
        { name: "Al", email: "amartignon21@springer.com", role: [users_1.Role.reader], active: true },
        { name: "Chev", email: "cmcenhill22@webs.com", role: [users_1.Role.reader], active: true },
        { name: "Jana", email: "jgrimmett23@webmd.com", role: [users_1.Role.librarian], active: true },
        { name: "Jobina", email: "jfaltin24@baidu.com", role: [users_1.Role.librarian], active: true },
        { name: "Cully", email: "csills25@japanpost.jp", role: [users_1.Role.reader], active: true },
        { name: "Deane", email: "dspottswood26@ycombinator.com", role: [users_1.Role.librarian], active: true },
        { name: "Forbes", email: "fbushell27@google.co.jp", role: [users_1.Role.reader], active: false },
        { name: "Luke", email: "labella28@state.gov", role: [users_1.Role.librarian], active: false },
        { name: "Neddie", email: "nhyrons29@yolasite.com", role: [users_1.Role.reader], active: false },
        { name: "Lissi", email: "lfilipczynski2a@vk.com", role: [users_1.Role.librarian], active: false },
        { name: "Lita", email: "lhawtry2b@intel.com", role: [users_1.Role.librarian], active: false },
        { name: "Sharai", email: "scahalan2c@stumbleupon.com", role: [users_1.Role.reader], active: true },
        { name: "Jedd", email: "jperkins2d@imdb.com", role: [users_1.Role.librarian], active: true },
        { name: "Dieter", email: "dpryn2e@gmpg.org", role: [users_1.Role.librarian], active: false },
        { name: "Clem", email: "cdwelley2f@google.com", role: [users_1.Role.librarian], active: true },
        { name: "Balduin", email: "bkondratyuk2g@admin.ch", role: [users_1.Role.reader], active: false },
        { name: "Stephan", email: "speekevout2h@buzzfeed.com", role: [users_1.Role.reader], active: false },
        { name: "Mildred", email: "mcorey2i@washingtonpost.com", role: [users_1.Role.reader], active: true },
        { name: "Robbi", email: "rtott2j@xinhuanet.com", role: [users_1.Role.librarian], active: true },
        { name: "Enriqueta", email: "estonehewer2k@imdb.com", role: [users_1.Role.librarian], active: false },
        { name: "Reggi", email: "rdunridge2l@github.io", role: [users_1.Role.librarian], active: false },
        { name: "Iolanthe", email: "idowning2m@livejournal.com", role: [users_1.Role.reader], active: true },
        { name: "Buckie", email: "bbrosetti2n@quantcast.com", role: [users_1.Role.reader], active: true },
        { name: "Herb", email: "hkett2o@list-manage.com", role: [users_1.Role.librarian], active: true },
        { name: "Tanner", email: "tbudleigh2p@flavors.me", role: [users_1.Role.librarian], active: true },
        { name: "Lyndsay", email: "lleuty2q@walmart.com", role: [users_1.Role.reader], active: true },
        { name: "Roxie", email: "rfalla2r@tamu.edu", role: [users_1.Role.librarian], active: false }];
    // god   [0]
    // admin [1]
    var options = new users_1.UserFilter();
    options.name = 'Иван';
    options.email = '911@library.ru';
    options.role = [users_1.Role.admin];
    options.active = true;
    myLibrary.postUser(godUser, options);
    // [2]-[x]
    var item; // для обхода mock данных с последующим созданием пользователей
    for (var _i = 0, msUsers_1 = msUsers; _i < msUsers_1.length; _i++) {
        item = msUsers_1[_i];
        options = new users_1.UserFilter();
        options.name = item.name;
        options.email = item.email;
        options.role = item.role;
        options.active = item.active;
        myLibrary.postUser(godUser, options);
    }
}
exports.addUsers = addUsers;
function addBooks(myCatalog, godUser) {
    // https://www.mockaroo.com/ - generate mockdata
    var msBooks = [{ name: "Star!", author: "Boris", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1993, active: true },
        { name: "Wedding Trough (Vase de noces)", author: "Avis", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 1999, active: false },
        { name: "Marine Story, A", author: "Felipa", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2007, active: true },
        { name: "Escape Me Never", author: "Carmelina", genre: [catalog_1.Genre.business], year: 2008, active: false },
        { name: "Secret Agent", author: "Lars", genre: [catalog_1.Genre.thriller], year: 2007, active: true },
        { name: "Wicked City (Yôjû toshi)", author: "Upton", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 1991, active: true },
        { name: "Pick-up Summer (Pinball Summer)", author: "Evelyn", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2005, active: true },
        { name: "Last Wave, The", author: "Loren", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 1995, active: true },
        { name: "Tombs of the Blind Dead", author: "Kerstin", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2005, active: false },
        { name: "Riptide", author: "Alida", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2009, active: true },
        { name: "Twilight", author: "Alex", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1993, active: false },
        { name: "Assassination of a High School", author: "Alvy", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 1992, active: true },
        { name: "*batteries not included", author: "Isak", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 2003, active: false },
        { name: "Rebirth", author: "Franny", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2008, active: false },
        { name: "Monkey in Winter", author: "Thorpe", genre: [catalog_1.Genre.business], year: 2008, active: true },
        { name: "Holiday Affair", author: "Hamish", genre: [catalog_1.Genre.business], year: 1999, active: true },
        { name: "WALL·E", author: "Skippie", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1998, active: false },
        { name: "Visit, The", author: "Thorpe", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 2002, active: false },
        { name: "Finger, The (Dedo, El)", author: "Pearle", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1986, active: true },
        { name: "Pursuit of Happyness, The", author: "Chelsey", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2009, active: false },
        { name: "Let My Puppets Come", author: "Meridith", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 1995, active: false },
        { name: "Way... Way Out", author: "Gilbertina", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2005, active: false },
        { name: "Brothers at War", author: "Alta", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2011, active: false },
        { name: "Brother (Brat)", author: "Norton", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1997, active: true },
        { name: "Adam & Steve", author: "Hana", genre: [catalog_1.Genre.thriller], year: 2011, active: false },
        { name: "Rosemary's Baby", author: "Kassandra", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 1996, active: true },
        { name: "When Darkness Falls", author: "Jon", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1994, active: true },
        { name: "King of Kings, The", author: "Cherlyn", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2007, active: true },
        { name: "American Pop", author: "Dorelia", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1972, active: true },
        { name: "Chinoise, La", author: "Clevey", genre: [catalog_1.Genre.thriller], year: 1991, active: false },
        { name: "Hotte in Paradise", author: "Orran", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2010, active: true },
        { name: "Monsieur Lazhar", author: "Sharia", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2011, active: true },
        { name: "Little Secrets", author: "Letisha", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1997, active: false },
        { name: "Stag Night", author: "Daisey", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1986, active: false },
        { name: "Point Men, The", author: "Toni", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2006, active: true },
        { name: "Cape Fear", author: "Tersina", genre: [catalog_1.Genre.business], year: 2006, active: true },
        { name: "Victor/Victoria", author: "Sullivan", genre: [catalog_1.Genre.thriller], year: 2010, active: true },
        { name: "Lionheart", author: "Greer", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1995, active: true },
        { name: "They Wait", author: "Devondra", genre: [catalog_1.Genre.business], year: 1996, active: false },
        { name: "Vito", author: "Tamera", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1988, active: false },
        { name: "Up Periscope", author: "Allx", genre: [catalog_1.Genre.business], year: 1988, active: false },
        { name: "Crucified Lovers", author: "Lacee", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1969, active: false },
        { name: "Aks", author: "Christean", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2006, active: false },
        { name: "The Blood of Fu Manchu", author: "Arin", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1996, active: false },
        { name: "Cold in July", author: "Nate", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1998, active: true },
        { name: "Flying Machines", author: "Gardiner", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 2010, active: false },
        { name: "Call Me Madam", author: "Taite", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 1997, active: true },
        { name: "3 dev adam (Three Giant Men) ", author: "Brit", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 2012, active: true },
        { name: "Adonis Factor, The", author: "Parrnell", genre: [catalog_1.Genre.business], year: 1989, active: false },
        { name: "Horrible Bosses", author: "Elsa", genre: [catalog_1.Genre.business], year: 1988, active: true },
        { name: "Screamers", author: "Georgetta", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1961, active: true },
        { name: "Once My Mother", author: "Melisande", genre: [catalog_1.Genre.business], year: 2008, active: true },
        { name: "Bridge to Terabithia", author: "Olav", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 2007, active: true },
        { name: "Birdcage Inn (Paran daemun)", author: "Irina", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2003, active: false },
        { name: "Bad Johnson", author: "Orella", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2009, active: true },
        { name: "See You in the Morning", author: "Lindy", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2001, active: true },
        { name: "Werner - Gekotzt wird später", author: "Andrej", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2011, active: true },
        { name: "Caesar Must Die", author: "Skipper", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 1987, active: true },
        { name: "Whatever Happened to Harold Smith?", author: "Jarrid", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2009, active: true },
        { name: "Conformist, The (Conformista, Il)", author: "Aleksandr", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2009, active: false },
        { name: "Stiff Upper Lips", author: "Athena", genre: [catalog_1.Genre.business], year: 2007, active: true },
        { name: "Wolfman, The", author: "Mollee", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1995, active: false },
        { name: "The New Centurions", author: "Donielle", genre: [catalog_1.Genre.business], year: 2000, active: true },
        { name: "Future by Design", author: "Vince", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1999, active: false },
        { name: "Terminal USA", author: "Alane", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2006, active: true },
        { name: "These Amazing Shadows", author: "Rainer", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 1987, active: false },
        { name: "Fallen Idol, The", author: "Palm", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2012, active: false },
        { name: "Tempest, The", author: "Orv", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1972, active: false },
        { name: "Inside Paris (Dans Paris)", author: "Marlin", genre: [catalog_1.Genre.business], year: 1992, active: false },
        { name: "Dragon Age: Redemption", author: "Curtice", genre: [catalog_1.Genre.business], year: 2004, active: true },
        { name: "Juche Idea, The", author: "Truman", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2008, active: false },
        { name: "Here Comes the Devil", author: "Pavel", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2003, active: true },
        { name: "Branch Reflecting on Existence", author: "Raynor", genre: [catalog_1.Genre.thriller], year: 2011, active: false },
        { name: "Slasher", author: "Issiah", genre: [catalog_1.Genre.business], year: 2001, active: true },
        { name: "Goya's Ghosts", author: "Goddart", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1985, active: true },
        { name: "General Died at Dawn, The", author: "Mignonne", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 2005, active: true },
        { name: "Love in Another Language", author: "Kathe", genre: [catalog_1.Genre.business], year: 1987, active: false },
        { name: "Island of Dr. Moreau, The", author: "Flemming", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1994, active: false },
        { name: "My Weakness Is Strong", author: "Benni", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 2004, active: false },
        { name: "Les Feux Arctiques (Arktiset tulet)", author: "Dillie", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1984, active: false },
        { name: "X-Men: Days of Future Past", author: "Laurens", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 2006, active: true },
        { name: "Evita", author: "Roth", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 1986, active: false },
        { name: "Suzanne's Diary for Nicholas", author: "Constantin", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 2007, active: true },
        { name: "Dragon Ball Z: Wrath of the Dragon", author: "Nissie", genre: [], year: 2007, active: true },
        { name: "Man Who Sleeps", author: "Arlena", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 2010, active: true },
        { name: "Felidae", author: "Shawnee", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1963, active: false },
        { name: "Five-Year Engagement, The", author: "Katey", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2001, active: false },
        { name: "42 Up", author: "Desmond", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2006, active: true },
        { name: "Legacy of a Hollywood Renegade", author: "Chauncey", genre: [], year: 1998, active: true },
        { name: "A Film About the Pixies", author: "Collen", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1995, active: true },
        { name: "Under Ten Flags", author: "Oneida", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 1995, active: false },
        { name: "Love Story", author: "Sibyl", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 2009, active: true },
        { name: "The War at Home", author: "Wendye", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy, catalog_1.Genre.history, catalog_1.Genre.fantasy], year: 2011, active: true },
        { name: "Supernova", author: "Martie", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 2008, active: false },
        { name: "Chromophobia", author: "Ravid", genre: [catalog_1.Genre.poems, catalog_1.Genre.comedy], year: 1996, active: true },
        { name: "Mr. Untouchable", author: "Joleen", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1991, active: true },
        { name: "Who Killed Bambi?", author: "Elly", genre: [catalog_1.Genre.fantasy, catalog_1.Genre.history], year: 1998, active: false },
        { name: "Make Like a Thief", author: "Orville", genre: [catalog_1.Genre.business], year: 1994, active: true },
        { name: "Mickey Blue Eyes", author: "Gusty", genre: [catalog_1.Genre.theory, catalog_1.Genre.novel], year: 1992, active: true },
        { name: "Carpool", author: "Filbert", genre: [catalog_1.Genre.business, catalog_1.Genre.psychology], year: 1992, active: true }];
    // [0] Дань уважения первой книге из бизнес-литературы, которую прочитал
    var newBook = new catalog_1.BookFilter;
    newBook.name = "Цель";
    newBook.author = "Элияху Голдратт";
    newBook.genre = [catalog_1.Genre.business, catalog_1.Genre.theory];
    newBook.year = 2014;
    newBook.active = true;
    myCatalog.postBook(godUser, newBook);
    // [1]-[x]
    var item; // для обхода mock данных с последующим созданием пользователей
    for (var _i = 0, msBooks_1 = msBooks; _i < msBooks_1.length; _i++) {
        item = msBooks_1[_i];
        var options = new catalog_1.BookFilter;
        options.name = item.name;
        options.author = item.author;
        options.genre = item.genre;
        options.year = item.year;
        options.active = item.active;
        myCatalog.postBook(godUser, options);
    }
}
exports.addBooks = addBooks;