'use strict'
const hidden = document.querySelector('.hidden');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const navigate = document.querySelector('.navigate');
const blur = document.querySelector('.blur');


menu.addEventListener('click', function(){
 navigate.classList.remove('hidden');
});
closeMenu.addEventListener ('click', function(){
 navigate.classList.add('hidden');
});