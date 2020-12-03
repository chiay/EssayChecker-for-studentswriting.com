( function () {
   
   mw.loader.using(['ext.Compromise'], function(require) {
      require('ext.Compromise');

      var t = nlp('dinosaur').nouns().toPlural();
      console.log(t.text())
   });

}() );