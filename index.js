'use strict'
const hidden = document.querySelector('.hidden');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const navigate = document.querySelector('.navigate');
const overlay = document.querySelector('.overlay');


menu.addEventListener('click', function(){
 navigate.classList.remove('hidden');
 overlay.classList.remove('hidden');
});


closeMenu.addEventListener ('click', function(){
 navigate.classList.add('hidden');
 overlay.classList.add('hidden');

});