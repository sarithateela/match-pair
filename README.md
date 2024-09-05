Fruit Matching Game
This is a simple fruit-themed card matching game built with JavaScript. Players can flip cards to find matching pairs. The goal is to match all the pairs with as few attempts as possible. The game also provides a restart functionality to shuffle the cards and reset attempts.

Features
Players can select cards to find matching fruit pairs.
A counter tracks how many attempts it takes to match all pairs.
Cards are shuffled and reset when the game is restarted.
Players are alerted when they have successfully matched all pairs.
Smooth animations for incorrect matches and shuffling.
Attempts are displayed dynamically as players make selections.
How to Play
Click on a card to reveal the fruit hidden underneath.
Select another card. If the fruits match, they remain face up.
If the fruits don't match, both cards will shake and turn back over after a short delay.
Continue flipping cards until all pairs have been matched.
The game tracks the number of attempts it takes to match all pairs.
Once all pairs are matched, a congratulatory alert will be displayed.
Technologies Used
HTML
CSS
JavaScript
Getting Started
Installation
Clone this repository to your local machine.
bash
Copy code
git clone https://github.com/sarithateela/match-pair
Navigate to the project directory.
Running the Game
Open the index.html file in any web browser to start playing the game.
open index.html
Game Controls
Flip Cards: Click on any card to reveal the fruit.
Restart the Game: Press the "Restart" button to shuffle the cards and reset your attempts.
Code Overview
shuffleCards()
Shuffles the order of cards in the game, resets attempts, and re-attaches event listeners to handle card clicks.

attachCardEventListeners(cards)
Attaches click event listeners to each card. Handles the logic for matching pairs and animations for incorrect guesses.

checkForWin()
Checks if all cards have been matched and displays a congratulatory alert when the player wins.

updateAttemptsDisplay()
Updates the number of attempts in the game UI.

Example Gameplay
The player flips over two cards.
If they match, they remain face up.
If they don’t match, they shake and flip back over.
Once all pairs are matched, the player wins.
License
This project is open source and available under the MIT License.

Feel free to customize this README to better fit your specific project or add more details!







