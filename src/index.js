import _ from 'lodash';
import './style.css';
import * as homeModule from './home';
import * as menuModule from './menu';
import * as aboutModule from './about';

export const div=document.querySelector('#content');




const menuBtn=document.querySelector("#menu-btn");
const aboutBtn=document.querySelector("#about-btn");
const homeBtn=document.querySelector("#home-btn");


menuBtn.addEventListener('click', ()=>{
    div.removeAttribute('id','content')
    div.setAttribute('id' ,'menu-content')
    div.textContent='';
    menuModule.displayMenu();
});

aboutBtn.addEventListener("click", ()=>{
    div.removeAttribute('id','content')
    div.setAttribute('id' ,'about-content')
    div.textContent="";
    aboutModule.displayAbout();
});

homeBtn.addEventListener('click', ()=>{
    div.removeAttribute('id','menu-content')
   div.setAttribute('id' ,'content')
    div.textContent='';
    homeModule.displayHome();
});

homeModule.displayHome();