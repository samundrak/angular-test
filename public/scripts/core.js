define(function () {
    // "use strict";
    return {
        templateUrlProvider: $stateParams => '/views/app/partials/' + $stateParams.page,
        controllerProvider: $stateParams => $stateParams.page + "Controller",
        optionalParamParser: param=> (param && param.substr(1)) || false,
        getSum: function (selectedItems) {
            "use strict";
            return selectedItems.reduce(function (prev, current) {
                return prev + parseFloat(current.price);
            }, 0)
        },
        centsToDollaString: function (x) {
            var cents = x + ""
            while (cents.length < 4) {
                cents = "0" + cents;
            }
            var dollars = cents.substr(0, cents.length - 2)
            var decimal = cents.substr(cents.length - 2, 2)
            while (dollars.length % 3 != 0) {
                dollars = "0" + dollars;
            }
            str = dollars.replace(/(\d{3})(?=\d)/g, "$1" + ",").replace(/^0*(?=.)/, "");
            return "$" + str + "." + decimal;
        }
        ,
        fakeBooksDetails: [{
            "id": 1,
            "author": "Randy Snyder",
            "name": "Community Outreach Specialist",
            "price": "3.20",
            "isbn": "649985988-5"
        }, {
            "id": 2,
            "author": "Albert Duncan",
            "name": "Geologist I",
            "price": "4.67",
            "isbn": "979159703-0"
        }, {
            "id": 3,
            "author": "Chris West",
            "name": "Compensation Analyst",
            "price": "5.11",
            "isbn": "318548899-7"
        }, {
            "id": 4,
            "author": "Susan Cook",
            "name": "Research Nurse",
            "price": "3.01",
            "isbn": "353440303-7"
        }, {
            "id": 5,
            "author": "Jason Hart",
            "name": "Food Chemist",
            "price": "1.47",
            "isbn": "049657946-0"
        }, {
            "id": 6,
            "author": "Nicole Ray",
            "name": "Occupational Therapist",
            "price": "6.09",
            "isbn": "785086658-4"
        }, {
            "id": 7,
            "author": "Dorothy Warren",
            "name": "Teacher",
            "price": "4.67",
            "isbn": "904377927-X"
        }, {
            "id": 8,
            "author": "Laura Hunt",
            "name": "Executive Secretary",
            "price": "5.90",
            "isbn": "244240691-8"
        }, {
            "id": 9,
            "author": "Gary Butler",
            "name": "Senior Editor",
            "price": "5.02",
            "isbn": "500166291-5"
        }, {
            "id": 10,
            "author": "Joseph Matthews",
            "name": "Professor",
            "price": "8.07",
            "isbn": "423909870-X"
        }, {
            "id": 11,
            "author": "Susan Green",
            "name": "VP Marketing",
            "price": "4.10",
            "isbn": "529318607-8"
        }, {
            "id": 12,
            "author": "Brian Hawkins",
            "name": "Technical Writer",
            "price": "7.03",
            "isbn": "347991918-9"
        }, {
            "id": 13,
            "author": "Ryan Fisher",
            "name": "Speech Pathologist",
            "price": "5.60",
            "isbn": "649531062-5"
        }, {
            "id": 14,
            "author": "Howard Mendoza",
            "name": "Software Engineer III",
            "price": "5.60",
            "isbn": "158144981-X"
        }, {
            "id": 15,
            "author": "Frank Armstrong",
            "name": "Community Outreach Specialist",
            "price": "8.10",
            "isbn": "838699535-1"
        }, {
            "id": 16,
            "author": "Todd Spencer",
            "name": "Senior Financial Analyst",
            "price": "3.94",
            "isbn": "795604156-2"
        }, {
            "id": 17,
            "author": "Norma Foster",
            "name": "Technical Writer",
            "price": "7.83",
            "isbn": "990138304-8"
        }, {
            "id": 18,
            "author": "Russell Alvarez",
            "name": "Social Worker",
            "price": "1.31",
            "isbn": "482001061-1"
        }, {
            "id": 19,
            "author": "Todd Young",
            "name": "Project Manager",
            "price": "6.73",
            "isbn": "828839076-5"
        }, {
            "id": 20,
            "author": "Kenneth Black",
            "name": "Computer Systems Analyst IV",
            "price": "6.05",
            "isbn": "155787855-2"
        }, {
            "id": 21,
            "author": "Tina Ford",
            "name": "Registered Nurse",
            "price": "7.62",
            "isbn": "168642135-4"
        }, {
            "id": 22,
            "author": "Judy Gibson",
            "name": "VP Quality Control",
            "price": "5.16",
            "isbn": "555149493-4"
        }, {
            "id": 23,
            "author": "Christina Cunningham",
            "name": "Chemical Engineer",
            "price": "2.76",
            "isbn": "298286677-3"
        }, {
            "id": 24,
            "author": "Ann Alexander",
            "name": "Developer II",
            "price": "6.62",
            "isbn": "502973319-1"
        }, {
            "id": 25,
            "author": "Maria Burns",
            "name": "Web Designer III",
            "price": "0.85",
            "isbn": "819812380-6"
        }, {
            "id": 26,
            "author": "Alan Gonzalez",
            "name": "Senior Developer",
            "price": "8.04",
            "isbn": "026507387-1"
        }, {
            "id": 27,
            "author": "Katherine Burke",
            "name": "Assistant Manager",
            "price": "7.58",
            "isbn": "020954453-8"
        }, {
            "id": 28,
            "author": "Gregory Gardner",
            "name": "Social Worker",
            "price": "7.82",
            "isbn": "802542030-2"
        }, {
            "id": 29,
            "author": "Randy Edwards",
            "name": "Tax Accountant",
            "price": "2.91",
            "isbn": "157538108-7"
        }, {
            "id": 30,
            "author": "Bonnie Cruz",
            "name": "Assistant Professor",
            "price": "8.80",
            "isbn": "368698394-X"
        }, {
            "id": 31,
            "author": "Benjamin Carpenter",
            "name": "Associate Professor",
            "price": "3.00",
            "isbn": "408114373-0"
        }, {
            "id": 32,
            "author": "Sharon Tucker",
            "name": "Senior Sales Associate",
            "price": "9.77",
            "isbn": "928285608-9"
        }, {
            "id": 33,
            "author": "Barbara Barnes",
            "name": "Environmental Tech",
            "price": "5.45",
            "isbn": "732267576-2"
        }, {
            "id": 34,
            "author": "Edward Wallace",
            "name": "Librarian",
            "price": "6.01",
            "isbn": "143841260-6"
        }, {
            "id": 35,
            "author": "Kelly Rice",
            "name": "Food Chemist",
            "price": "9.00",
            "isbn": "788663764-X"
        }, {
            "id": 36,
            "author": "Wayne Jones",
            "name": "Desktop Support Technician",
            "price": "1.99",
            "isbn": "396771071-8"
        }, {
            "id": 37,
            "author": "Charles Peterson",
            "name": "Analog Circuit Design manager",
            "price": "9.38",
            "isbn": "893237809-6"
        }, {
            "id": 38,
            "author": "Ernest Romero",
            "name": "Programmer III",
            "price": "4.51",
            "isbn": "225853077-6"
        }, {
            "id": 39,
            "author": "Maria Dixon",
            "name": "Compensation Analyst",
            "price": "5.22",
            "isbn": "312941603-X"
        }, {
            "id": 40,
            "author": "Anne Walker",
            "name": "Senior Developer",
            "price": "3.18",
            "isbn": "608300535-3"
        }, {
            "id": 41,
            "author": "Stephen Cox",
            "name": "Financial Advisor",
            "price": "1.84",
            "isbn": "640308408-9"
        }, {
            "id": 42,
            "author": "Annie Welch",
            "name": "Associate Professor",
            "price": "9.61",
            "isbn": "139273457-6"
        }, {
            "id": 43,
            "author": "Frances Cole",
            "name": "Operator",
            "price": "7.05",
            "isbn": "954068253-3"
        }, {
            "id": 44,
            "author": "Michael James",
            "name": "Account Coordinator",
            "price": "2.77",
            "isbn": "047430059-5"
        }, {
            "id": 45,
            "author": "David Fisher",
            "name": "Developer I",
            "price": "5.53",
            "isbn": "766908390-5"
        }, {
            "id": 46,
            "author": "Johnny Stanley",
            "name": "Graphic Designer",
            "price": "6.39",
            "isbn": "152634959-0"
        }, {
            "id": 47,
            "author": "Benjamin Nelson",
            "name": "Statistician III",
            "price": "5.82",
            "isbn": "858575955-0"
        }, {
            "id": 48,
            "author": "Raymond Anderson",
            "name": "Operator",
            "price": "8.69",
            "isbn": "217865892-X"
        }, {
            "id": 49,
            "author": "Sarah Hamilton",
            "name": "Environmental Tech",
            "price": "1.28",
            "isbn": "682922631-7"
        }, {
            "id": 50,
            "author": "Michael Woods",
            "name": "Data Coordiator",
            "price": "6.32",
            "isbn": "628231571-9"
        }]
    }
});