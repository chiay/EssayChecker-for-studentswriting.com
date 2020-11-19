# EssayChecker
 
 A plugin that is used to check paragraph/essay structure based on the rules showing below:
 
 | Shortcut for Students | Actual Paragraph Structure |
 | --------------------- | -------------------------- |
 | R - Restate the questions | Topic Sentence |
 | A - Answer the question | Fact 1 Sentence |
 | C - Cite the text evidence | Fact 2 Sentence |
 | E - Explain the cited text | Concluding Sentence |

## Usage

### Setup

- Copy the code from style.css to MediaWiki:Common.css
  - If a new page (eg. MediaWiki:Example.css) is created to contain it, add this line 
  `mw.loader.load( '/w/index.php?title=MediaWiki:Example.css&action=raw&ctype=text/css', 'text/css' );` to MediaWiki:Common.js to load 
- Copy the code from script.js to MediaWiki.Common.js
  - If a new page (eg. MediaWiki:Example.js) is created to contain it, add this line 
  `mw.loader.load( '/w/index.php?title=MediaWiki:Example.js&action=raw&ctype=text/javascript' );` to MediaWiki:Common.js to load
  
### Use Plug-In

To check a paragraph, it must be wrapped with `<div class="checker-container"><p>YOUR PARAGRAPH</p></div>`. Add a `<p></p>` tag to each paragraph for essay checking. Once added, a button will show on top of your paragraph/essay. 
