import {div} from "./index";


export function displayAbout(){

    const ParagraphDiv=document.createElement('div');  
    const aboutParagraph=document.createElement('p');

ParagraphDiv.setAttribute('id','paragraph-div');
aboutParagraph.classList.add("about-paragraph");
  div.append(ParagraphDiv);
    aboutParagraph.innerHTML=`<span class='brand-name'>Flama Shawarma</span> was found in 1943
    by Nasrat Abdul Al-najid where he found the idea to make colored Pink Shawarma <br>
    from the flamingos he grew from his farm. Originally he got this idea from his Dad as he made a joke on his deathbed
    it was"<span class='joke'> What's a flamingo that grew up in middle east favorite type of sandwich? "Pink" shawarmiii</span>".
     as they both laughed at the joke Mr.Abdul Al-Najid <span class='dead'> died in a panic attack </span>.
      This was reason Nasrat thought about making this business.`
    ParagraphDiv.append(aboutParagraph);
}