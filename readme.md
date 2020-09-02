## Quiz Yo'Self 


## Motivation behind the game 
To build a game that utilized a RESTful API to deliver unique content on each play. The game needed to be responsive in all sizes and work well on both desktop and mobile screens. We wanted to highlight a strong udnerstanding of both UI/UX design and CSS as well as interactive Javascript. 

## Tools used 
* HTML5
* CSS3
* RESTful APIs
* Javascript ES6
* Adobe Photoshop
* Adobe Audition
* Adobe Indesign

## Challenges and Solutions
* Challenge: We needed to get data to transfer between HTML pages to ensure the same questions and the results of answers transfered throughout the game. 
* Solution: We utilized local storage throughout the game to create and store data so that it could be accessed on different pages. 
* Challenge: Create responsive design on every page for all browser sizes.
* Solution: We utilized a mix of flexbox CSS3 and media querys to ensure proper sizing and break points throughout the game to keep users from scrolling unnecessarily. 
* Challenge: API only delivers a limited number of questions throughout the playthrough, select a number was returning too many options. 
* Solution: Utilized a second part of the API to query total questions available and then built the number of questions logic into the dynamic selection Javascript to ensure only the correct number questions were available.
* Challenge: Wanted to add sound to the site throughout the game play. 
* Solution: Utilized event handlers and timeouts to proprely manage async between clicks and sounds on the stack to ensure proper timing. 


## Design evolution
![](/images/screenshots/entry_page_large.png)

![](/images/screenshots/questions_correct_mobile.png)

![](/images/screenshots/results_table_mobile.png)


## Link
* https://practical-goodall-353986.netlify.app/index.html

## Goals for next iteration 
* Add special / hard modes
* Add cheat codes
* Update to take T/F Questions
* Timer / Timed questions
* Floating answers on hard mode
* Correct / Incorrect animation
* Competitive play

## Credits
* Shaiah Emigh-Doyle
* Kevin Jeffers
* Katy Sage
* Eric Schorling
* Open Trivia Database
