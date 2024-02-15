 // INIT references
const buttonPanel = {
    action : document.querySelector("#action-button"),
    left: document.querySelector("#left-button"),
    right: document.querySelector("#right-button")
};

const screen = document.querySelector("#main-screen");

// SET card_thumbnails = array of images
// SET card_contents = array of images
// SET current card = 0
 const cards = {
    current: 0,
    names: ["pokemon", "monster hunter", "chipi", "genshin", "ghibli", "bananagrams"],
    getCurrentName: function() { return this.names[this.current]; }
};

// SET arrow buttons = disabled
 buttonPanel.left.disabled = true;
 buttonPanel.right.disabled = true;

 const phase = {
    START: 0,
    MAILBOX: 1,
    LETTER: 2
 }

 // SET state = start
 let currentPhase = phase.START;

 // FUNCTION on click action button:
 buttonPanel.action.addEventListener("click", () => {
    switch (currentPhase) {
        case phase.START:
        case phase.LETTER:
            goToMailbox();
            break;
        case phase.MAILBOX:
            goToCard();
            break;
    }
 //      IF state = start:
 //          CALL go to mailbox
 //      ELSE IF state = mailbox:
 //          CALL launch current card
 //      ELSE IF state = letter:
 //          CALL go to mailbox
});


 // FUNCTION go to mailbox:
 function goToMailbox() {
 //      SET game state = mailbox
    currentPhase = phase.MAILBOX;
 //      SET action button text = "Open"
    buttonPanel.action.textContent = "Open Card";
 //      SET image = current card image
    screen.textContent = cards.getCurrentName();
 //      CALL set buttons
 }

  // FUNCTION launch current card:
function goToCard() {
 //      SET state = letter
    currentPhase = phase.LETTER;
 //      SET action button text = back
    buttonPanel.action.textContent = "Back";
 //      SET image = current card image 
    screen.textContent = "viewing contents of " + cards.getCurrentName();
 //      SET right button disabled
 //      SET left button disabled
}

 // 
 // FUNCTION set buttons
 //      IF current card = 0:
 //          SET left button = disabled
 //      ELSE:
 //          SET left button = enabled
 // 
 //      IF current card = length - 1:
 //          SET right button = disabled
 //      ELSE:
 //          SET right button = enabled
 // 
 // FUNCTION on click right arrow key:
 //      IF current card < total - 1:
 //          SET current card ++ 
 //          SET image = card image
 //          CALL set buttons
 // 
 // FUNCTION on click left arrow key:
 //      IF current card > 0:
 //          SET current card -- 
 //          SET image = card image
 //          CALL set buttons
 //      

 // 
 // 
 // 
 ///