import {div} from './index';
import shawarmaImg from "./asset/shawarma.jpg"


export function displayHome(){
    const p=document.createElement('p')
    p.innerHTML=`Ara's Shawarma with <br> 
    our own special toum <b><i> sauce </b>`

   const shawarma=new Image();
    shawarma.src=shawarmaImg;
    shawarma.alt='A shawarma Image';
    shawarma.classList.add('shawarma-img');

    div.append(p);
    div.append(shawarma);
}

