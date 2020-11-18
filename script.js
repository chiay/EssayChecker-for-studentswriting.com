/* Get essay container that contains multiple paragraph */
const checkerContainer = document.querySelector('.checker-container');
const modal = document.querySelector('.modal');
const exitModal = document.querySelector('.close');
const modalText= document.querySelector('.modalText');

const topicCountElement = document.querySelector('.topicCount');
const detailCountElement = document.querySelector('.detailCount');
const citeCountElement = document.querySelector('.citeCount');

/*
 * A list of special phrase used for citation
 * Add more phrases here for more detection
 */
const topicPhrases = ['good reasons', 'some reasons', 'many reasons', 'few reasons', 'in order to', 'in answer to', 'in support of', 'in the interest of', 'for lack of', 'with good', 'by way of', 'at the thought of', 'at the time of', 'in reply to', 'on account of', 'on condition that', 'with reference to', 'with regard to', 'with respect to', 'with the help of', 'with the intention of'];

const citationPhrases = ['shows', 'suggests', 'illustrates', 'proposes', 'explains', 'comments', 'argues', 'states', 'According to', 'As stated', 'maintains', 'claims', 'submits', 'contends', 'affirms', 'asserts', 'reports', 'indicates', 'points out', 'informs', 'notes', 'observes', 'remarks', 'advocates', 'holds the position', 'presents arguments', 'emphasizes'];

const transitionPhrases = ['Also', 'Likewise', 'Still', 'In addition', 'Additionally', 'Furthermore', 'Moreover', 'Not only that'];

const conclusionPhrases = ['conclusion', 'summary', 'nutshell', 'summation', 'In the end', 'In essence', 'summarize', 'ultimately', 'To put in concisely', 'In brief', 'In short', 'To sum up', 'Basically', 'In closing', 'Lastly', 'Finally', 'conclude', 'Thus', 'Hence', 'As a result', 'For the reason', 'is why', 'Because of', 'Therefore', 'This is the reason', 'This means that', "For these reasons"];


checkEssay(checkerContainer);


function checkEssay(container) {
   if (container !== null) {

      setupModalControl();

      const children = checkerContainer.children;
      const childList = Array.from(children);

      childList.forEach(child => {
         let splittedSentence = child.textContent.split(/(\w[^.?]+\w[^\s?]*)\s+/gi).filter((el) => { return el.length != 0; });

         splittedSentence.shift();

         console.log(splittedSentence);

         let spannedSentence = addSpanTag(splittedSentence);

         let resultParagraph = spannedSentence.join(' ');
         let paragraphElement = document.createElement('p');

         paragraphElement.innerHTML = resultParagraph;
         modalText.innerHTML += paragraphElement.outerHTML;
         
         //child.innerHTML = resultParagraph;
      });
   }
}

function setupModalControl() {
   const buttonElement = document.createElement('button');
   const buttonText = document.createTextNode('Click here to check');
   buttonElement.appendChild(buttonText);
   checkerContainer.insertAdjacentElement('beforebegin', buttonElement);

   buttonElement.classList.add('check');

   buttonElement.addEventListener('click', () => {
      modal.style.display = 'block';
   });
   
   exitModal.addEventListener('click', () => {
      modal.style.display = 'none';
   });
   
   window.addEventListener('click', (e) => {
      if (e.target == modal) {
         modal.style.display = 'none';
      }
   });
}

function addSpanTag(sentenceArray) {

   const len = sentenceArray.length;

   return sentenceArray.map((sentence, index) => {

      let spanElement = document.createElement('span');
      let spanText = document.createTextNode(sentence);
      spanElement.appendChild(spanText);

      if (index == 0) {
         topicPhrases.some(phrase => {
            if (sentence.includes(phrase)) {
               spanElement.classList.add('topic');
            }
         });
      } else if (index == len - 1) {
         conclusionPhrases.some(phrase => {
            if (sentence.includes(phrase)) {
               spanElement.classList.add('conclusion');
            }
         });
      } else {
         spanElement.classList.add('detail');
      }

      citationPhrases.some(phrase => {
         if (sentence.includes(phrase) || sentence.indexOf('"') >= 0 || sentence.indexOf('...') >= 0) {
            spanElement.classList.remove('detail');
            spanElement.classList.add('cite');
         }
      });
      return spanElement.outerHTML;
   });
}