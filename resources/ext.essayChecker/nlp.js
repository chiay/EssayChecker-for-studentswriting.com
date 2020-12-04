/** 
 * #Determiner (a.k.a article): a, an, the
 * 
 */

var sentenceStructures = [
   '#Pronoun #Verb #Determiner #Noun',
   '#Determiner #Noun #Verb #Determiner #Noun',
   //'#Pronoun #Verb #Preposition #Determiner #Noun',
   '#Pronoun #Verb #Preposition * #Determiner #Noun', // Compound Preposition
   //'#Determiner #Noun #Verb #Preposition #Article #Noun',
   '#Determiner #Noun #Verb #Preposition * #Determiner #Noun', // * for all terms until next type
   '#Determiner #Noun #Verb #Preposition * #Determiner #Noun #Preposition * #Determiner #Noun',
   '#Pronoun #Verb #Adjective', // "Be verb"
   '#Determiner #Noun #Verb #Adjective',
   '#Determiner #Adjective #Noun #Verb #Adjective',
   '#Pronoun #Verb #Preposition * #Determiner #Adjective #Noun',
   '#Pronoun #Verb #Determiner #Adjective #Noun'
];

module.exports = function perSentenceStructure() {
   mw.loader.using(['ext.Compromise'], function(require) {
      require('ext.Compromise');

      var t = nlp('He was kind.').has(sentenceStructures[5]);
      console.log(t)
   });
}