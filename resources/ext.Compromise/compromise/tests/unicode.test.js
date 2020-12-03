const test = require('tape')
const nlp = require('./_lib')

test('many-unicode', function (t) {
  let str = `✐✠✰❀❐❞❰➀➐➠➰✁✑✡✱❁❑❡❱➁➑➡➱✂✒✢✲❂❒❢❲➂➒➢➲✃✓✣✳❃❓❣❳➃➓➣➳✄✔✤✴❄❔❤❴➄➔➤➴✅✕✥✵❅❕❥❵➅➕➥➵✆✖✦✶❆❖❦❶➆➖➦➶✇✗✧✷❇❗❧❷➇➗➧➷✈✘✨✸❈❘❨❸➈➘➨➸✉✙✩✹❉❙❩❹➉➙➩➹✊✚✪✺❊❚❪❺➊➚➪➺✋✛✫✻❋❛❫❻➋➛➫➻✌✜✬✼❌❜❬❼➌➜➬➼✍✝✭✽❍❝❭❽➍➝➭➽✎✞✮✾❎❞❮❾➎➞➮➾✏✟✯✿❏❜❯❿➏➟➯➿😀😐😠😰🙀😁😑😡😱🙁😂😒😢😲🙂😃😓😣😳🙃😄😔😤😴🙄😅😕😥😵🙅😆😖😦😶🙆😇😗😧😷🙇😈😘😨😸🙈😉😙😩😹🙉😊😚😪😺🙊😋😛😫😻🙋😌😜😬😼🙌😍😝😭😽🙍😎😞😮😾🙎😏😟😯😿🙏,&、*.+-;<:>?=!—\($)%{@}〔〕₠₰₡₱₢₲₣₳₤₴₥₵₦₶₧₷₸₩₹₪₺₫₻€₼₭₽₮₾₯₿`
  let doc = nlp(str)
  t.equal(doc.text(), str, 'identical-text')
  t.equal(doc.length, 1, 'one-sentence')
  t.equal(doc.terms().length, 1, 'one-term')
  t.end()
})

test('em-dashes', function (t) {
  let str = 'text—text'
  let doc = nlp(str)
  t.equal(doc.text() === str, true, 'emdash')
  t.end()
})
