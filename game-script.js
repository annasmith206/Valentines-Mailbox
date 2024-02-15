const buttonPanel = {
    action : document.querySelector("#action-button"),
    left: document.querySelector("#left-button"),
    right: document.querySelector("#right-button")
};

const screen = document.querySelector("#main-screen");

 const cards = {
    current: 0,
    names: ["pokemon", "monster hunter", "chipi", "genshin", "ghibli", "bananagrams"],
    getCurrentName: function() { 
        return this.names[this.current]; 
    },
    canScrollRight: function() { 
        return this.current < (this.names.length - 1);
    },
    canScrollLeft: function() { 
        return this.current > 0;
    },
    scroll: function (direction) { this.current += direction; }
};

const phase = {
    START: 0,
    MAILBOX: 1,
    LETTER: 2
}

const direction = {
    RIGHT: 1,
    LEFT: -1
}

let currentPhase = phase.START;

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
});

buttonPanel.right.addEventListener("click", () => { 
    if (cards.canScrollRight()) {
        cards.scroll(direction.RIGHT);
        screen.textContent = cards.getCurrentName();
    }
});

buttonPanel.left.addEventListener("click", () => { 
    if (cards.canScrollLeft()) {
        cards.scroll(direction.LEFT);
        screen.textContent = cards.getCurrentName();
    }
});


 function goToMailbox() {
    currentPhase = phase.MAILBOX;
    buttonPanel.action.textContent = "Open Card";
    screen.textContent = cards.getCurrentName();
 }

function goToCard() {
    currentPhase = phase.LETTER;
    buttonPanel.action.textContent = "Back";
    screen.textContent = "viewing contents of " + cards.getCurrentName();
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
 
 //      

 // 
 // 
 // 
 ///