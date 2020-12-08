/**
 * #Determiner (a.k.a article): a, an, the
 *
 */

var sentenceStructures = [
	'#Pronoun #Verb #Determiner #Noun',
	'#Determiner #Noun #Verb #Determiner #Noun',
	//'#Pronoun #Verb #Preposition #Determiner #Noun',
	'#Pronoun #Verb * #Preposition * #Determiner #Noun', // Compound Preposition
	'#Determiner #Noun #Verb * #Preposition * #Determiner #Noun', // * for all terms until next type
	'#Determiner #Noun #Verb * #Preposition * #Determiner #Noun #Preposition * #Determiner #Noun',
	'#Pronoun #Verb #Adjective', // "Be verb"
	'#Determiner #Noun #Verb #Adjective',
	'#Determiner #Adjective #Noun #Verb #Adjective',
	'#Pronoun #Verb * #Preposition * #Determiner #Adjective #Noun',
	'#Pronoun #Verb #Determiner #Adjective #Noun',
	'#Pronoun #Verb * #Preposition * #Determiner #Adjective #Noun * #Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun * #Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb * #Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb * #Preposition * #Determiner #Adjective #Noun #Determiner #Adjective #Noun',
	'#Adverb #Pronoun #Verb * #Preposition * #Determiner #Noun',
	'#Pronoun #Adverb #Verb * #Preposition * #Determiner #Noun',
	'#Pronoun #Verb #Adverb * #Preposition * #Determiner #Noun',
	'#Pronoun #Verb * #Preposition * #Determiner #Noun #Adverb',
	'#Adverb #Determiner #Noun #Verb * #Preposition * #Determiner #Noun',
	'#Determiner #Noun #Adverb #Verb * #Preposition * #Determiner #Noun',
	'#Determiner #Noun #Verb #Adverb * #Preposition * #Determiner #Noun',
	'#Determiner #Noun #Verb * #Preposition * #Determiner #Noun #Adverb',
	'#Adverb #Determiner #Noun #Verb * #Preposition * #Determiner #Noun * #Preposition * #Determiner #Noun',
	'#Adverb #Pronoun #Verb #Determiner #Adjective #Noun',
	'#Adverb #Pronoun #Verb * #Preposition * #Determiner #Adjective #Noun',
	'#Pronoun #Adverb #Verb #Determiner #Adjective #Noun',
	'#Pronoun #Adverb #Verb * #Preposition * #Determiner #Adjective #Noun',
	'#Pronoun #Verb #Adverb #Determiner #Adjective #Noun',
	'#Pronoun #Verb #Adverb * #Preposition * #Determiner #Adjective #Noun',
	'#Pronoun #Verb #Determiner #Adjective #Noun #Adverb',
	'#Pronoun #Verb * #Preposition * #Determiner #Adjective #Noun #Adverb',
	'#Adverb #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun',
	'#Adverb #Determiner #Adjective #Noun #Verb * #Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Adverb #Verb #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Adverb #Verb * Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Adverb * Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Adverb',
	'#Determiner #Adjective #Noun #Verb * Preposition * #Determiner #Adjective #Noun #Adverb',
	'#Adverb #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun * Preposition * #Determiner #Adjective #Noun',
	'#Adverb #Determiner #Adjective #Noun #Verb * Preposition * #Determiner #Adjective #Noun * Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Adverb #Verb #Determiner #Adjective #Noun * Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Adverb #Verb * Preposition * #Determiner #Adjective #Noun * Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Adverb * Preposition * #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun * Preposition * #Determiner #Adjective #Noun #Adverb',
	'#Determiner #Adjective #Noun #Verb  * Preposition * #Determiner #Adjective #Noun * Preposition * #Determiner #Adjective #Noun #Adverb'
];

module.exports = function perSentenceStructure(sentence) {
	mw.loader.using(['ext.Compromise'], function (require) {
		require('ext.Compromise');

		var t = nlp('He was kind.').has(sentenceStructures[5]);
		console.log(t);

		return t;
	});
};
