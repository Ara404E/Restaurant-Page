import _ from 'lodash';
import './style.css';
import myImage from './download.jpeg';

const myIcon = new Image();
const div = document.querySelector('#content');
myIcon.src = myImage;

div.appendChild(myIcon)
    

