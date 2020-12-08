'use strict';
/* Get essay container that contains multiple paragraph */

var checkerContainer = document.querySelector('.checker-container');
var modal = document.querySelector('.modal');
var exitModal = document.querySelector('.close');
var modalText = document.querySelector('.modalText');
var modalError = document.querySelector('.modalError');

var topicCountElement = document.querySelector('.topicCount');
var detailCountElement = document.querySelector('.detailCount');
var citeCountElement = document.querySelector('.citeCount');
var citeExplainCountElement = document.querySelector('.citeExplainCount');

var topicCount = 0;
var detailCount = 0;
var citeCount = 0;
var citeExplainCount = 0;

/*
 * A list of special phrase used for citation
 * Add more phrases here for more detection
 */
var topicPhrases = [
	'good reasons',
	'some reasons',
	'many reasons',
	'few reasons',
	'in order to',
	'in answer to',
	'in support of',
	'in the interest of',
	'for lack of',
	'with good',
	'by way of',
	'at the thought of',
	'at the time of',
	'in reply to',
	'on account of',
	'on condition that',
	'with reference to',
	'with regard to',
	'with respect to',
	'with the help of',
	'with the intention of',
];

var citationPhrases = [
	'shows',
	'suggests',
	'illustrates',
	'proposes',
	'explains',
	'comments',
	'argues',
	'states',
	'According to',
	'As stated',
	'maintains',
	'claims',
	'submits',
	'contends',
	'affirms',
	'asserts',
	'reports',
	'indicates',
	'points out',
	'informs',
	'notes',
	'observes',
	'remarks',
	'advocates',
	'holds the position',
	'presents arguments',
	'emphasizes',
];

var transitionPhrases = [
	'Also',
	'Likewise',
	'Still',
	'In addition',
	'Additionally',
	'Furthermore',
	'Moreover',
	'Not only that',
];

var conclusionPhrases = [
	'conclusion',
	'summary',
	'nutshell',
	'summation',
	'In the end',
	'In essence',
	'summarize',
	'ultimately',
	'To put in concisely',
	'In brief',
	'In short',
	'To sum up',
	'Basically',
	'In closing',
	'Lastly',
	'Finally',
	'conclude',
	'Thus',
	'Hence',
	'As a result',
	'For the reason',
	'is why',
	'Because of',
	'Therefore',
	'This is the reason',
	'This means that',
	'For these reasons',
];

//checkEssay(checkerContainer);

/**
 * Entry point for checking all paragraphs.
 */

module.exports = function checkEssay() {
	if (checkerContainer !== null) {
		setupModalControl();

		var children = checkerContainer.children;
		var childList = Array.from(children);

		childList.forEach(function (child) {
			var splittedSentence = child.textContent
				.split(
					/((?![.\n\s])[^.\n"]*(?:"[^\n"]*[^\n".]"[^.\n"]*)*(?:"[^"\n]+\."|\.|(?=\n)))\s*/gi
				)
				.filter(function (el) {
					return el.length != 0;
				});

			splittedSentence.shift();

			var spannedSentence = addSpanTag(splittedSentence);

			var resultParagraph = spannedSentence.join(' ');
			var paragraphElement = document.createElement('p');

			paragraphElement.innerHTML = resultParagraph;
			modalText.innerHTML += paragraphElement.outerHTML;
		});

		topicCountElement.innerText = topicCount;
		detailCountElement.innerText = detailCount;
		citeCountElement.innerText = citeCount;
		citeExplainCountElement.innerText = citeExplainCount;

		if (
			detailCount !== citeCount ||
			topicCount !== childList.length ||
			citeExplainCount !== childList.length
		) {
			modalError.innerText = 'Oops! Did you miss something?';
		}
	}
}

/**
 * Set Up modal for showing checker result.
 */

function setupModalControl() {
	var buttonElement = document.createElement('button');
	var buttonText = document.createTextNode('Check here!');
	buttonElement.appendChild(buttonText);
	checkerContainer.insertAdjacentElement('beforebegin', buttonElement);

	buttonElement.classList.add('check');

	buttonElement.addEventListener('click', function () {
		modal.style.display = 'block';
	});

	exitModal.addEventListener('click', function () {
		modal.style.display = 'none';
	});

	window.addEventListener('click', function (e) {
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	});
}

/**
 * 
 * Add 'span' tag to each sentence of paragraph.
 * @param {string} sentenceArray
 * @return {HTMLDOM} Contains paragraph with 'span' tags for each sentence
 * 
 */

function addSpanTag(sentenceArray) {
	var len = sentenceArray.length;

	return sentenceArray.map(function (sentence, index) {
		var spanElement = document.createElement('span');
		var spanText = document.createTextNode(sentence);
		spanElement.appendChild(spanText);

		if (index == 0) {
			topicPhrases.some(function (phrase) {
				if (sentence.includes(phrase)) {
					spanElement.classList.add('topic');
					topicCount++;
				}
			});
		} else if (index == len - 1) {
			conclusionPhrases.some(function (phrase) {
				if (sentence.includes(phrase)) {
					spanElement.classList.add('conclusion');
					citeExplainCount++;
				}
			});
		} else {
			spanElement.classList.add('detail');
			detailCount++;
		}

		citationPhrases.some(function (phrase) {
			if (sentence.includes(phrase)) {
				spanElement.classList.remove('detail');
				spanElement.classList.add('cite');
				detailCount--;
				citeCount++;
			}
		});
		return spanElement.outerHTML;
	});
}
