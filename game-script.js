 // INIT references
const buttonPanel = {
    action : document.querySelector("#action-button"),
    left: document.querySelector("#left-button"),
    right: document.querySelector("#right-button")
};

// SET card_thumbnails = array of images
// SET card_contents = array of images
// SET current card = 0
 const cards = {
    current: 0,
    names: ["pokemon", "monster hunter", "chipi", "genshin", "ghibli", "bananagrams"]
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
            alert("In start phase. Going to mailbox");
            currentPhase = phase.MAILBOX;
            break;
        case phase.MAILBOX:
            alert("Viewing mailbox. Launching current card")
            currentPhase = phase.LETTER;
            break;
        case phase.LETTER:
            alert("Viewing letter. Going back to mailbox")
            currentPhase = phase.MAILBOX;
    }
 //      IF state = start:
 //          CALL go to mailbox
 //      ELSE IF state = mailbox:
 //          CALL launch current card
 //      ELSE IF state = letter:
 //          CALL go to mailbox
});

 // FUNCTION go to mailbox:
 //      SET game state = mailbox
 //      SET action button text = "Open"
 //      SET image = current card image
 //      CALL set buttons
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
 // FUNCTION launch current card:
 //      SET state = letter
 //      SET right button disabled
 //      SET left button disabled
 //      SET action button text = back
 //      SET image = current card image 
 // 
 // 
 // 
 ///