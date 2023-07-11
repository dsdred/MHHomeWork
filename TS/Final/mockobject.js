"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUsers = void 0;
var users_1 = require("./users");
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
