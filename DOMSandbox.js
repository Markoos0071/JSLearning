//DOM = Document Object Model

//Qeury Selector
//Quesry selector uses the css selectors to grab and element
// const para = document.querySelector('p')
// console.log(para.textContent);

// const para2 = document.querySelector('.error')
// console.log(para2.textContent);

// const div = document.querySelector('div.error')
// console.log(div.textContent);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.textContent);
// });

// console.log(paras[1].textContent);

// const errors = document.querySelectorAll('.error');
// errors.forEach(error => {
//     console.log(error.textContent)
// })

// //Get Element by ID
// const title = document.getElementById('page-title');
// console.log(title.textContent)

// //Get Element by Class
// //This provides an HTML collection and you cant foreach the product
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0].textContent);

// //Get Element by Tag
// const para = document.getElementsByTagName('p');
// console.log(para)
// console.log(para[0].textContent)

//Changing the html
const para = document.querySelector('p');
// para.innerText = 'Hello but more';

const paras = document.querySelectorAll('P');

// paras.forEach(para => {
//     para.innerText += ' hey';
// });

const contentDiv = document.querySelector('.content');
// contentDiv.innerHTML += '<h2>New HTML</h2>';

const people = ['Guy', 'Not Guy', 'Another Not Guy'];

// people.forEach(person => {
//     contentDiv.innerHTML += `<p>${person}</p>`;
// });


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.amazon.com')

// console.log(link.getAttribute('href'));

//const message = document.querySelector('p.error');

// console.log(message.getAttribute('class'));

// message.setAttribute('class', 'not-error')
//message.setAttribute('style', 'color: green')

// const title = document.querySelector('#page-title');

// console.log(title.style)

// title.style.margin = '50px';
// title.style.color = 'red';
// title.style.fontSize = '60px';
// title.style.margin = '';

// const message = document.querySelector('p.error');

// console.log(message.classList);
// message.classList.add('success')
// console.log(message.classList);
// message.classList.remove('success')
// console.log(message.classList);


// const paras2 = document.querySelectorAll('p');

// paras2.forEach(p => {
//     if(p.textContent.includes("error")){
//         p.classList.add('error');
//     }
//     else if(p.textContent.includes("success")){
//         p.classList.add('success');
//     }
// })

// const titleTest = document.querySelector('.title');
// titleTest.classList.toggle('test');
// titleTest.classList.toggle('test');