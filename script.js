let counter = 0;
let firstSelection = "";
let secondSelection = "";
let attempts = 0;

document.addEventListener('DOMContentLoaded', () => {
    const restartButton = document.getElementById('btn');
    const cardsContainer = document.querySelector('.cards');
    const attemptsDisplay = document.querySelector('.container p'); 
    const cards = Array.from(cardsContainer.children); 

    function shuffleCards() {
        cards.forEach(card => {
            card.classList.remove('checked', 'clicked', 'shake');
        });

        cards.sort(() => Math.random() - 0.5);

        cardsContainer.innerHTML = '';

        cards.forEach(card => cardsContainer.appendChild(card));

        attempts = 0;
        updateAttemptsDisplay();

        attachCardEventListeners(cards);
    }

    restartButton.addEventListener('click', shuffleCards);

    function attachCardEventListeners(cards) {
        cards.forEach((card) => {
            card.addEventListener("click", () => {
               
                if (!card.classList.contains('clicked') && !card.classList.contains('checked')) {
                    card.classList.add("clicked");

                    if (counter === 0) {
                        firstSelection = card.getAttribute("fruit");
                        counter++;
                    } else {
                        secondSelection = card.getAttribute("fruit");
                        counter = 0;
                        attempts++; // Increment the attempts counter
                        updateAttemptsDisplay(); // Update the display

                        if (firstSelection === secondSelection) {
                            const correctCards = document.querySelectorAll(
                                ".card[fruit='" + firstSelection + "']"
                            );

                            correctCards[0].classList.add("checked");
                            correctCards[0].classList.remove("clicked");
                            correctCards[1].classList.add("checked");
                            correctCards[1].classList.remove("clicked");

                            checkForWin();
                        } else {
                            const incorrectCards = document.querySelectorAll(".card.clicked");

                            incorrectCards[0].classList.add("shake");
                            incorrectCards[1].classList.add("shake");

                            setTimeout(() => {
                                incorrectCards[0].classList.remove("shake");
                                incorrectCards[0].classList.remove("clicked");
                                incorrectCards[1].classList.remove("shake");
                                incorrectCards[1].classList.remove("clicked");
                            }, 1000);
                        }
                    }
                }
            });
        });
    }

    function updateAttemptsDisplay() {
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    }

    function checkForWin() {
        const allChecked = document.querySelectorAll('.card.checked');
        if (allChecked.length === cards.length) {
            setTimeout(() => { // Add a slight delay before showing the alert
                alert("Congrats, you won! 🎉🎉🎉");
            }, 500);
        }
    }

    attachCardEventListeners(cards);
    updateAttemptsDisplay(); 
});
