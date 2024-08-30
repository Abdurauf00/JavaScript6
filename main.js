// Массивы хранят любые данные (string, num, bolean)
// splice () - метод массива, позволяющий удалить что-то с выбранной ячейки (massiv.splice(i,1))
//push - добавление элемента массива в конец, а unshift - в начало.
// pop - удаляет последний элемент Shift - первый
// forEach - метод перебирающий весь массив
// метод map - создает новый массив и работает с данными указанного массива

//N1

let aboba = [];

function first() {
    while (true) {
        let command = prompt('Введите команду');
        if (!command) continue;

        let lol = command.split(', ');
        let word = lol[0];

        if (word == 'stop') {
            break;
        } else if (word == 'add') {
            aboba.push(lol[1]);
        } else if (word == 'del') {
            let items = lol.slice(1); 
            aboba = aboba.filter(item => !items.includes(item)); 
        } // метод filter - создает новыц массив и фильтрует его
        
        console.log(aboba.join(', ')); 
    }
}
//  join - объединяет слова в одеу строку
// includes проверяет наличие элемкнта, если элемент есть то дает true, нет- false
first();


//N2


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let even = []; // чёт
let odd = []; // нечёт

array.forEach((number) => {
    if (number % 2 == 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
});
console.log(odd); 
console.log(even);
