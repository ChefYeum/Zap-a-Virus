# Zap a Virus - Game for Avast Challenge
## Inspiration
We were inspired by Avast's challenge theme about security and their antivirus software. The main purpose of creating this game was to entertain users while they wait for their browser to load.

## What it does
The concept of our 2D game is a user playing as a computer trying to conquer computer viruses such as trojan horses, cookie monsters and worm viruses that are falling down from the sky. The computer is using a weapon that shoots Avast antivirus software. Each virus has 3 health points, so once a computer shoots it 3 times, the virus dies and the computer gets a point. If the worms aren't destroyed within a short period of time, they start reproducing which is a metaphor for how viruses spread very quickly if they are not taken care of immediately. The goal of this game is to shoot the enemies while avoiding colliding with them.

## How we built it
The main part of our project was the MelonJS framework that we used to build our 2D Game with. We used both HTML5 and JavaScript with MelonJS's built-in classes to create entities for the main player - computer, the enemies - computer viruses and the bullets - Avast software. We also created a title, game page and game over screens with screen objects that also kept track of the current user score and their high score. We also made sure that the game ends once a collision between a computer and an enemy occurs.

## Challenges we ran into
We had issues with setting up the MelonJS environment since we did not have prior experience with using the framework. It took us some time to understand the API documentation before actually writing code. We found out that this framework does not have many diverse tutorials that are able to showcase different features of the API. For this reason, we also had difficulties dealing with collisions for players and enemies as it was hard to find any projects that have implemented the features that we needed.

## Accomplishments that we're proud of
We are proud that we managed to create a finished game in a completely new environment for us.

## What we learned
We learned that any new framework and environment requires a certain amount of time to become familiar with it. It is essential to understand how the code works before sprinting to write faulty and unclean code, as well as the importance and usefulness of documentation and tutorials.

## What's next for Zap a Virus
Zap a Virus can be implemented even further with the use of different levels of difficulty in the future, and most probably, it could also include a theme of privacy in it.

## Comments
- Dee Yeum: "The next generation of Flappy Bird"

## How to run
- With node installed, run `npm install` in the root directory of the project
- Run `npm install -g grunt-cli`(if fails, try `sudo`)
- Run `grunt serve` to serve
