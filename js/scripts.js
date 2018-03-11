// script.js

//komentowanie w js - liniowe
/* tak można wykomentować 
więcej linijek kodu */ 

// wyskakujące okienko pytające o imię
var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);

// Zmienne - Typy zmiennych
var text = 'Text "is" a string';
var number = 45;
var boolean = true; //true albo false
var something = undefined;
var empty = null;

var tablica = [true, 'text', 56, null];

// Działania na zmiennych
// dodawanie
var foo = 'lorem' + 'Ipsum';

foo = 'lorem' + ['1', 2, 3.4];     // 'lorem1, 2, 3.4'
foo = ['1', 2, 3.4] + 'lorem';     // '1,2,3.4lorem'
foo = 9 + ['1', 2, 3.4];             // '91,2,3.4'
foo = ['1', 2, 3.4] + 9;             // '1,2,3.49'
foo = ['1', 2, 3.4] + [1, '2', 3.4];  // '1,2,3.41,2,3.4'

foo = ['1', 2, 3.4] + { bar: 'lorem' }; // 1, 2, 3.4 [object Object]
foo = { bar: 'lorem' } + [1, '2', 3.4]; // [object Object] 1, 2, 3.4

foo = ['1', 2, 3.4] + undefined; // 1, 2, 3.4 undefined
foo = undefined + [1, '2', 3.4]; // undefined 1, 2, 3.4


//Postinkrementacja 
var points = 1;

console.log('The current value of points is: ', points); // 1
console.log('The current value of points is: ', points++); // 1 (najpierw wyświetla potem dodaje)
console.log('The current value of points is: ', points); // 2


//Preinkrementacja
var points = 1;

console.log('The current value of points is: ', points); // 1
console.log('The current value of points is: ', ++points); // 2 (najpierw dodaje potem wyświetla)
console.log('The current value of points is: ', points); // 2

// Modulo - wyznaczanie reszty z dzielenia dwóch liczb, tylko wartości całkowite, nie po przecinku
var x = 15,
    foo;

foo = x % 2;  // 1 bo 15 / 2 = 7 i 1 reszty
foo = x % 3;  // 0 bo 15 / 3 = 5 i 0 reszty
foo = x % 5;  // 0 bo 15 / 5 = 3 i 0 reszty


// ZADANIE - pole trójkąta
// Pole trójkąta automatyczne
var a = 4;
var h = 6;

var traingleArea = a * h / 2;

console.log('Pole trójkąta wynosi:', traingleArea);

// Pole trójkąta z prompt
var a = prompt("Enter triangle base 'a' ");
var h = prompt("Enter triangle height 'h' ");

var traingleArea = a * h / 2;

console.log('Pole trójkąta wynosi:', traingleArea);

// Instrukcje warunkowe (if, switch, short if)

// Operatory logiczne
// 1 == 1  -> operator równości wartości (czy po obu stronach to samo)
// true  
// 1 == '1'  
// true (bo nie sprawdza typu, tylko wartość)
// 1 === '1'  -> operator równości wartości i typu (czy wartość i typ takie same po obu stronach)
// false (bo typ inny)

// != -> operator różności (sprawdza czy są różne)
// >  operator większy niż (czy wart.po lewej większa niż po prawej)
// <  mniejszy niż (czy wart.po lewej mniejsza niz po prawej)
// >=  większy bądź równy
// <=  mniejszy bądź równy
// !  operator negacji (odwraca wart.logiczną zmiennej/wyrażenia)
        if (!(10 <= 1)) {
            //code
        }

// Łączenie wyrażeń 
// &&(i) - wynik true= oba składniki true

if ((1 == 1) && (10 <= 1)) {
    // code
}

// ||(lub) - wynik true = przynajmniej jeden składnik true
if ((1 == 1) || (10 <= 1)) {
    // code
}


/* Istrukcje warunkowe - coś się stanie jeżeli...
(jeden lub więcej bloków {}, if/ if else - poprzedza warunek) */
// if (condition1) {
//     //Code to execute if condition1 is true
// } else if (condition2) {
//     //Code to execute if condition2 is true
// } else {
//     //Code to execute if none of the previous conditions prove to be true
// }

// Przykład 1. 
if (1 === '1') {
    console.log('nie super'); //kod wyświetlony jeśli true
} else if (2 === 2) {
    console.log('elegancko') //kod do wyświetlenia jeśli true
} else {
    console.log('koniec'); // kod do wyświetlenia jeśli oba powyższe false
}

// Przykład 2.
var userName = prompt('enter your name');

if (userName == 'Piotr') {
    document.write('Witaj Piotrze!');
} else if (userName.length == 0) {
    document.write('Nie wprowadziłeś imienia!');
} else {
    document.write('Witaj ' + userName);
}

/* Switch 
(przyjmuje wartość i porównuje ją z przypadkami - case, 
jeśli żadna opcja nie pasuje - uruchamia zachowanie defeault) */

// Przykład 1. 
var question = prompt('You are an axolotl. Suddenly you find a salamander goo. Would you drink it?');

switch (question.toLowerCase()) {
    case 'yes':
        alert('You become a salamander!');
        break;
    case 'no':
        alert('Good! Neotenic state is nice!');
        break;
    default:
        alert("You did not give a clear answer, so you're probably still wondering.");
}

// Short if - skrócona wersja if 

// (condition) ? code_if_condition_is_true : code_if_condition_is_false

// ZADANIE - Instrukcje warunkowe w pratyce
var a = prompt("enter value 'a'");
var b = prompt("enter value 'b'");

var value = (a * a) - (2 * a * b) - (b * b);

console.log('Value is', value);

if (value > 0) {
    console.log('wynik dodatni'); //kod wyświetlony jeśli true
} else if (value == 0) {
    console.log('zero') //kod do wyświetlenia jeśli true
} else {
    console.log('wynik ujemny'); // kod do wyświetlenia jeśli oba powyższe false
}