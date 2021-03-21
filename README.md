# Pre-work - *Melody Memory*

**Melody Memory** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Melanie Chan**

Time spent: **12** hours spent in total

Link to project: https://melody-memory.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Button sizes are dynamic
- [ ] User can navigate between 2 HTML pages

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Winning the game:

![](https://i.imgur.com/Yzx4Vif.gif)

Losing the game:

![](https://i.imgur.com/pNURfLp.gif)

Navigation:

![](https://i.imgur.com/dHnP6WJ.gif)

Piano:

![](https://i.imgur.com/cgCbflk.gif)

Dynamic button sizes:

![](https://i.imgur.com/VZoqBpd.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/html/html_links.asp

https://github.com/keithwhor/audiosynth

https://codepen.io/jonvadillo/pen/BKMdRP

https://stackoverflow.com/questions/5083764/vertical-align-top-in-css

https://css-tricks.com/almanac/properties/z/z-index/

https://www.w3schools.com/howto/howto_css_responsive_text.asp 

https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I wanted to incorporate piano sound into my project. I knew there were external resources I could use, but I didn’t know how to use them. I searched for ideas using the keywords “javascript piano sound”, and found a resource I liked. I had trouble incorporating the resource into my project, because I didn’t understand how to link it. I called methods from this resource in my code, and when it didn’t work, I went into the console and realized that it didn’t recognize the resource.

At first I put: <script src="audiosynth.js"></script>

I noticed how my own javascript file link had a similar structure to the line of code above, and the difference is that my js file was in my project but “audiosynth.js” wasn’t. I thought I didn’t properly import the file, so I downloaded the files from the source and uploaded the file. It worked and the piano sound played, but I needed a link instead of an upload, to credit the original source.

Then I searched online for how to link and import external javascript files. I followed the instructions using the source’s github repo, and it worked.

When problem solving, I first start by understanding what the problem is by tracing the code and using the console. After I understand the problem, I can find keywords that describe it, and use those in my online searches.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

- What are similarities / differences between a career path in mobile and web development?
- What are the best online resources to learn web development?
- What skills/qualities/mindsets do web developers have that helps them succeed?
- What challenges do web developers encounter in the job?
- What do web developers enjoy most about their job?
- How do web developers use creativity in their job?
- How collaborative is web development?
- How interdisciplinary is web development?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- Make the group of buttons look more like a piano. I would find a way to make the black keys overlap the white keys. I’ve tried using z-indexing to put black keys in front of white keys, but it didn’t work and I would spend more time investigating why.
- Add other melodies. I would add more variables that are arrays of characters representing a melody. I could let the user choose which melody to use in the same, or pick a random melody. To do that, I could modify playClueSequence() to allow different melodies to be played.
- Clean up code. For the basic and musical versions, I used mostly the same javascript code. It would be less repetitive if I could factor out the code both versions share into a single js file.




## License

    Copyright Melanie Chan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
