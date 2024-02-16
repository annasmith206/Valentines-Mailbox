const buttonPanel = {
    action : document.querySelector("#action-button"),
    left: document.querySelector("#left-button"),
    right: document.querySelector("#right-button")
};

const displayImage = document.querySelector(".display-image");

const screen = document.querySelector("#main-screen");

 const cards = {
    current: 0,
    thumbnails: ["./images/pokeball.png", "./images/questBoard.png"],
    images: ["./images/torchic.png", "./images/quest.png"],
    names: ["pokemon", "monster hunter"],
    getCurrentThumbnail: function() {
        return this.thumbnails[this.current];
    },
    getCurrentImage: function() {
        return this.images[this.current];
    },
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
        displayImage.src = cards.getCurrentThumbnail();
        //screen.textContent = cards.getCurrentName();
    }
});

buttonPanel.left.addEventListener("click", () => { 
    if (cards.canScrollLeft()) {
        cards.scroll(direction.LEFT);
        displayImage.src = cards.getCurrentThumbnail();
        //screen.textContent = cards.getCurrentName();
    }
});


 function goToMailbox() {
    currentPhase = phase.MAILBOX;
    buttonPanel.action.textContent = "Open";
    displayImage.src = cards.getCurrentThumbnail();
 }

function goToCard() {
    currentPhase = phase.LETTER;
    buttonPanel.action.textContent = "Back";
    displayImage.src = cards.getCurrentImage();
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