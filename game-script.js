const buttonPanel = {
    action : document.querySelector("#action-button"),
    left: document.querySelector("#left-button"),
    right: document.querySelector("#right-button")
};

const displayImage = document.querySelector(".display-image");
const mainScreen = document.querySelector(".main-screen");
const messageScreen = document.querySelector(".message-screen")
 
const cards = {
    current: 0,
    thumbnails: ["./images/pokeball.png", "./images/questBoard.png"],
    images: ["./images/torchic.png", "./images/quest.png"],
    names: ["pokemon", "monster hunter"],
    thumbnailMessages: [
        "It's a pokeball! I wonder what pokemon is inside?", 
        "Is that a quest? I hope it's not urgent."
    ],
    contentMessages: [
        "It's a torchic! Looks like he has a message for you.",
        "WOW! This looks really important."
    ],
    getCurrentThumbnail: function() {
        return this.thumbnails[this.current];
    },
    getCurrentImage: function() {
        return this.images[this.current];
    },
    getCurrentName: function() { 
        return this.names[this.current]; 
    },
    getCurrentThumbnailMessage: function() {
        return this.thumbnailMessages[this.current];
    },
    getCurrentContentMessage: function() {
        return this.contentMessages[this.current];
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
        scrollThumnails(direction.RIGHT);
    }
});

buttonPanel.left.addEventListener("click", () => { 
    if (cards.canScrollLeft()) {
        scrollThumnails(direction.LEFT);
    }
});

function scrollThumnails(direction) {
    cards.scroll(direction);
    updateMailBox();
}

 function goToMailbox() {
    currentPhase = phase.MAILBOX;
    buttonPanel.action.textContent = "Open";
    mainScreen.style['align-items'] = "center";
    displayImage.classList.add("bounce");
    updateMailBox();
 }

function goToCard() {
    currentPhase = phase.LETTER;
    buttonPanel.action.textContent = "Back";
    messageScreen.textContent = cards.getCurrentContentMessage();
    displayImage.src = cards.getCurrentImage();
    setButtons();
}

function updateMailBox() {
    displayImage.src = cards.getCurrentThumbnail();
    messageScreen.textContent = cards.getCurrentThumbnailMessage();
    setButtons();
}

 function setButtons() {
    buttonPanel.left.disabled = (currentPhase === phase.LETTER) || !cards.canScrollLeft();
    buttonPanel.right.disabled = (currentPhase === phase.LETTER) || !cards.canScrollRight();
 }