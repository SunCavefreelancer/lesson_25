// Строгий режим
"use strict"

// WINDOW

// Отримання ширини вікна браузера (в'юпорта)
/*
const windowWidth = window.innerWidth;
console.log(windowWidth);
*/
// Отримання висоти вікна браузера (в'юпорта)
/*
let windowHeight = window.innerHeight;
console.log(windowHeight);
*/
/*
if (windowWidth >= 768) {
	// якісь дії
}
*/

//BOM
//Navigator

// Дані про браузер
// console.log(navigator.userAgent);

// Який в нас браузер
/*
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
*/

// Платформа
// console.log(navigator.userAgentData.platform);

// Location
// Адресний рядок браузера
// console.log(location.href);

// Перенаправлення користувача
// location.href += '#popup';

// Alert
// alert('Повідомлення');

// Сonfirm
/*
let confirmAnswer = confirm("Запитання");
console.log(confirmAnswer);

if (confirmAnswer) {
	//якщо так
} else {
	//якщо ні
}
*/
// confirmAnswer ? якщо так : якщо ні

//Prompt
/*
let promptAnswer = prompt("Запитання");
console.log(promptAnswer);

if (promptAnswer === null) {
	console.log('Юзер натиснув cancel');
} else if (promptAnswer) {
	console.log(`Відповідь користувача: ${promptAnswer}`);
} else {
	console.log(`Користувач не надав відповідь`);
}
*/

// Document Object Model (DOM)
// Об'ектна модель документу

// Навігація по документу
// До тегу html
/*
const htmlElement = document.documentElement;
console.log(htmlElement);
*/

// До тегу head
/*
const headElement = document.head;
console.log(headElement);
*/

// До тегу body
/*
const bodyElement = document.body;
console.log(bodyElement);
*/

// Перший та останній дочірній елемент
/*
const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);
*/
/*
// Усі дочірні елементи (Колекція)
const bodyElement = document.body;

// Колекція дочірніх елементів
const childNodes = bodyElement.children;
console.log(childNodes);
*/
/*
for (let i = 0; i < childNodes.length; ++i) {
	console.log(childNodes[i]);
}
*/
// For ... of метод перебору для колекцій
/*
for (let childNode of childNodes) {
	console.log(childNode);
}
*/

// Навігація до батьківських та сусідніх елементів
/*
const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
*/
/*
const headElement = document.head;
const nextSibling = headElement.nextElementSibling;
console.log(nextSibling);
*/

// !!! Найчастіше використовується !!!
// Пошук та отримання довільного елементу
/*
// Оримання одного першого знайденого об'єкту
const liElement = document.querySelector('li')
console.log(liElement);

// Чи щось знайдено?
if (liElement) {
	// тоді працюємо...
}

// Оримання списку (статична колекція)
// знайдених об'єктів
const liElements = document.querySelectorAll('li')
console.log(liElements);

// Чи щось знайдено?
if (liElements.length) {
	// тоді працюємо...
	liElements.forEach((item, index) => {
		console.log(item);
	});
}
*/
// Селектор класів
// !!! Обов'язково використовуємо крапку для імені класу
/*
const block = document.querySelector('.block')

const blocks = document.querySelectorAll('.block')
console.log(block);

if (block.length) {
	console.log('Є!');
}
*/

// Уточнення пошуку
// const liElements = document.querySelectorAll('.list__item.active');

// Усі об'єкти які мають в назві класу __item
/*
const liElements = document.querySelectorAll('[class*="__item"]');
console.log(liElements);
*/

// Селектор ID
/*
const someElement = document.querySelector('#some-id');
console.log(someElement);
*/

// Отримання батьківського об'єкту
/*
const someElement = document.querySelector('.list');
const parentElement = someElement.parentElement;
console.log(parentElement);
*/

// Closest
// (Перевірка наявності батьківського об'єкту)
// ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту
/*
const someElement = document.querySelector('#some-id');
const parentElement = someElement.closest('main');
if (parentElement) {

}
*/
/*
const liElement = document.querySelector('.list__item');
const isClosest = liElement.closest('.list__item');
console.log(isClosest);
*/


// Зміна документу
// const listItems = document.querySelectorAll('.list__item');

// innerHTML - дає змогу отримати те що всередені об'єкту
// включно з тегами.
// Також дозволяє перезаписувати контент в середені об'єкту

/*
listItems.forEach(listItem => {
	listItem.innerHTML = '<span>Привіт!</span>';
});*/
/*
const bodyElement = document.body;
console.log(bodyElement);
const htmlBody = bodyElement.innerHTML;
console.log(htmlBody);
*/

// textContent дає змогу отримати текст всередені об'єкту.
// Також дозволяє перезаписувати текст в середені об'єкту
/*
listItems.forEach(listItem => {
	listItem.textContent = '<span>Привіт!</span>';
});*/

// Створення об'єктів
/*
let newObject = document.createElement('div');
console.log(newObject);
newObject.innerHTML = `<span>Hi!</span>`;
console.log(newObject);

const wrapper = document.querySelector('.wrapper');

// Вставка створеного об'єкту
// Перед
//wrapper.before(newObject);
// Після
// wrapper.after(newObject);
// Всередену на початок
// wrapper.prepend(newObject);
// Всередену в кінець
// wrapper.append(newObject);
*/

// insertAdjacentHTML/Text/Element

// const wrapper = document.querySelector('.wrapper');

/*
"beforebegin" – вставити html безпосередньо перед wrapper,
"afterbegin" – вставити html на початок wrapper,
"beforeend" – вставити html в кінець wrapper,
"afterend" – вставити html безпосередньо після wrapper.
*/
/*
wrapper.insertAdjacentHTML("afterend", `
	<div class="block">
		<div class="block__item">123</div>
	</div>
`);*/

/*
let text = `
	<div class="block">
		<div class="block__item">123</div>
	</div>
`
wrapper.insertAdjacentText("afterend", text);
*/
/*
// Перенесення елементу
let list = document.querySelector('.list');
wrapper.insertAdjacentElement("afterend", list);
*/

// Клонування елементу
// cloneNode() - клонує сам об'єкт
// coneNode(true) - клонує об'єкт з вмістом
/*
const wrapper = document.querySelector('.wrapper')
const cloneWrapper = wrapper.cloneNode(true)
console.log(cloneWrapper)
*/

// Видалення об'єкту
/*
const list = document.querySelector('.list');
list.remove();
*/

// Стилі та класи
// className classList

// className - перезапис класу
/*
const list = document.querySelector('.list');
list.className = 'some-class';
*/

// const list = document.querySelector('.list');
// classList - метод роботи з класами//
// !!! НЕ використовуємо крапку для імені класу
// list.classList.add('list--red'); // - додаємо клас
// list.classList.remove('list--red'); // - видаляємо клас
// list.classList.toggle('active'); // - якщо клас є видаляємо якщо немає додаємо
// list.classList.contains('classname'); // - поверне true якщо клас є
/*
if (list.classList.contains('active')) {
	console.log('Клас active Є!');
}*/

// Управління стилями
// style
// const list = document.querySelector('.list');

// let newPadding = 50 + 15;

// Додати властивість
// list.style.paddingTop = `${newPadding}px`;
// list.style.width = `100px`;

// Перезапис стілів на вказані
/*
list.style.cssText = `
	padding-top: ${newPadding}px;
	width: 100px;
`;
*/
// list.style.paddingBottom = `40px`;

// Отримання стилю (його значення)
// getComputedStyle
/*
const list = document.querySelector('.list');
const listStyle = getComputedStyle(list);
// console.log(listStyle);
const listFontSize = parseFloat(listStyle.fontSize);
console.log(listFontSize);
if (listFontSize > 50) {
	list.style.fontSize = '30px';
}
*/

// Робота з атрибутами
/*
const list = document.querySelector('.list');
//Перевіряємо наявність атрибута.
list.hasAttribute('name');
//Получаємо значення атрибута.
list.getAttribute('name');
//Установлюємо значення атрибута.
list.setAttribute('name', 'value');
//Удаляємо атрибут.
list.removeAttribute('name');
*/
// DATA атирибути
// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
// Краще використовувати parseFloat
/*
let speed = parseFloat(list.dataset.speedAnimation);
console.log(speed);
*/
/*
if (list.hasAttribute('data-once')) {
	console.log('Є!');
}
*/

// Корисні властивості
/*
const list = document.querySelector('.list');

// Отримання імені тегу
console.log(list.tagName);

if (list.tagName === "UL") {
	// ...
}*/

// Атрибут hidden
// list.hidden = true;

// Розміри та кординати

// Розміри вікна браузера (з полосами прокрутки)
// об'єкт window
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
*/
// Розміри вікна браузера (без прокрутки)
// об'єкт body
// clientWidth clientHeight
/*
const mainElement = document.body;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight);
*/
// Кількість прокручений пікселів
// об'єкт window
/*
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

// window.scrollTo({ options })
// прокрутка на вказані кординати
/*
window.scrollTo({
	top: 1000,
	left: 0,
	behavior: "smooth" // Safari не працює
});
*/

// elem.scrollIntoView();
// Проктурка до об'єкту
/*
const list = document.querySelector('.list');
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: block,
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(list);
*/

// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (позиція CSS-свойства absolute, relative, fixed чи sticky)
// відносно якого рахується кординати

/*
const list = document.querySelector('.list');
const listLeftPos = list.offsetLeft;
const listTopPos = list.offsetTop;

console.log(listLeftPos);
console.log(listTopPos);
*/

// Кординати відносно вікна браузера
// getBoundingClientRect
/*
const list = document.querySelector('.list');
console.log(list.getBoundingClientRect().top);
console.log(list.getBoundingClientRect().left);
*/
// Загальні розміри елемента (без зовнішніх відступів)
// offsetWidth и offsetHeight
/*
const list = document.querySelector('.list');
console.log(list.offsetWidth);
console.log(list.offsetHeight);
*/

// Отримання об'екта по кординатам
// document.elementFromPoint(x, y);
/*
const elem = document.elementFromPoint(50, 0);
console.log(elem);
*/

/*
// Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/