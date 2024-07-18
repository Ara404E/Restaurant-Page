import { div } from './index';
import crew from "./asset/pinkCrew.jpg";

export function displayHome() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const p = document.createElement('p');
    p.classList.add('centered-text');
    p.innerHTML = `Flama Shawarma`;

    const pinkCrew = new Image();
    pinkCrew.src = crew;
    pinkCrew.alt = 'A shawarma Image';
    pinkCrew.classList.add('crew-img');
    imageContainer.appendChild(pinkCrew);
    imageContainer.appendChild(p);
    div.append(imageContainer);
}
