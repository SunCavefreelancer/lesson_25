// Строгий режим
"use strict"


//Задача №1
//Отримати в константу елемент <body>

//Відповідь:
const bodyElement = document.body;
console.log(bodyElement); // Виводить елемент <body> у консолі



//Задача №2
//Написати функцію, яка додає в <body> список UL
//з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

//Відповідь:
function addList(numItems = 7) { // За замовчуванням додаємо 7 елементів
	const ulElement = document.createElement('ul'); // Створюємо новий список ul
	ulElement.setAttribute('role', 'list'); // Додаємо атрибут ролі для доступності

	for(let i = 1; i <= numItems; i++){ // Цикл через вказану кількість елементів
		const liElement = document.createElement('li'); // Створюємо новий елемент li
		liElement.setAttribute('role', 'listitem'); // Додаємо атрибут ролі для доступності
		liElement.textContent = (`Пункт ${i}`); // Додаємо текст до елемента li
		ulElement.appendChild(liElement); // Додаємо елемент li до списку ul
	}

	document.body.appendChild(ulElement); // Додаємо список ul до тіла документа
}

addList(7); // Викликаємо функцію із 7 елементами




//Задача №3
//Додати до елементу <body> класс loaded.
//Потім перевірити чи є клас loaded у елемента <body>
//і, якщо є, додати стиль кольору тесту зедлений.

//Відповідь:
document.body.classList.add('loaded'); // Додаємо клас 'loaded' до елемента body
	let bodyItem = document.body;

// Перевіряємо, чи має елемент body клас 'loaded'
	if (bodyItem.classList.contains('loaded')) {
// Якщо так, змінюємо кольори тексту на зелений
	bodyItem.style.color = 'green';
}



//Задача №4
//Дано в html: три елементи з класом item.
//Треба отримати ці елементи в константу, кожному додати клас active, 
//та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

//Відповідь:
// Отримуємо всі елементи з класом 'item' в масив
const items = Array.from(document.querySelectorAll('.item'));

// Проходимося по кожному елементу масиву
items.forEach((item, index) => {
	// Додаємо клас 'active' кожному елементу
	item.classList.add('active');

	// Перезаписуємо контент кожного елементу 
	item.innerHTML = `Елемент №${index+1}`;
});




//Задача №5
//Дано в html: текст, далі кнопка з класом button.
//Треба прокрутити скрол сторінки до кнопки

//Відповідь:
// Отримуємо кнопку за допомогою класу
const button = document.querySelector('.button');

// Прокручуємо сторінку до кнопки
button.scrollIntoView({behavior: "smooth", block: "center"});




//Задача №6
//Дано в html: посилання з класом link
//Треба додати до посилання дата атрибут зі значенням 100
//Поім отримати значення трибуту, та, якщо значення меньше 200
//пофарбувати колір тексту посилання в червоний


//Відповідь:
// Отримуємо посилання за допомогою класу
const link = document.querySelector('.link');

// Додаємо дата-атрибут зі значенням 100
link.setAttribute('data-value', '100');

// Перевіряємо значення атрибута data-value
let dataAttributeValue = link.getAttribute('data-value');

// Якщо значення атрибута менше 200, фарбуємо текст посилання в червоний колір
if (dataAttributeValue < 200) {
	link.style.color = 'red';
}