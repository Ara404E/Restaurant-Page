import { div } from "./index";
import './menuStyle.css';
import PinkWrap from "./asset/pinkWrap.jpg";
import PinkDoner from "./asset/pinkDoner.jpg";
import PinkSkewer from "./asset/pinkSkewers.jpg";
import PrideShawarma from './asset/prideShawarma.jpg';
import RicePlate from "./asset/RicePlate.jpg";

const Menu = {
    myPinkWrap: {
        name: "Pink Wrap",
        price: "$3.99",
        foodDec: `flamingo shawarma with 
        our special toum sauce`,
        img: PinkWrap
    },
    myPinkDoner: {
        name: "Pink Doner",
        price: "$4.99",
        foodDec: `Turkey style flamingo Doner
        with pink sauce`,
        img: PinkDoner
    },
    myPinkSkewer: {
        name: "Pink Skewers",
        price: "$6.99",
        foodDec: `tender flamingo skewers
        with our secret pink seasoning`,
        img: PinkSkewer
    },
    myPrideShawarma: {
        name: "Pride Shawarma",
        price: "$2.99",
        foodDec: `Pride Shawarma made to 
        disappoint your parents`,
        img: PrideShawarma
    },
    myRicePlate: {
        name: "Rice Plate",
        price: "$5.99",
        foodDec: `a rice platter with tender
         flamingo meat`,
        img: RicePlate
    }
};

export function displayMenu() {
    const menuDiv=document.createElement('div');
    menuDiv.setAttribute('id','menu-div');
    div.append(menuDiv);

    
        Object.values(Menu).forEach((item,index ) => {
            const itemDiv=document.createElement('div');
            itemDiv.classList.add('menu-item');
            
            if(index % 2!=0){
                itemDiv.classList.add('reverse');
            }
        const foodImg= new Image();
        foodImg.src=item.img;
        foodImg.alt=`an image of ${item.img}`;
        foodImg.classList.add('food-card');
        
        const foodDetail=document.createElement('p');
        foodDetail.classList.add('food-detail');
            foodDetail.innerHTML=`${item.foodDec} <br> ${item.price}`;

            itemDiv.append(foodImg)
            itemDiv.append(foodDetail)
            menuDiv.append(itemDiv);
    });
}
