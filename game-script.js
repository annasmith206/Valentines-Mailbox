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
    thumbnails: [
        "./images/bananagrams.png",
        "./images/questBoard.png",
        "./images/pokeball.png",
        "./images/cat.png",
        "./images/map.png"
    ],
    images: [
        "./images/tiles.png",
        "./images/quest.png",
        "./images/torchic.png",
        "./images/chipi.gif",
        "./images/treasure.png"
    ],
    thumbnailMessages: [
        "What a weird looking banana...",
        "Is that a quest? I hope it's not urgent!",
        "It's a pokeball! I wonder what pokemon is inside?",
        "A beat up box... looks like something (or someone) is moving in there!",
        "Last one! Looks like some kind of map... "
    ],
    contentMessages: [
        "Oh! It's bananagrams! I hope this  makes up for all the times I beat you :)",
        "WOW! This looks really important!",
        "It's torchic!",
        "CHIPI CHIPI CHAPA CHAPA DOOBIE DOOBIE DABA DABA MAGICO MI DUBI DUBI BOOM BOOM BOOM",
        "A treasure hunt! Good luck on your search! Thanks for playing :)"
    ],
    getCurrentThumbnail: function() {
        return this.thumbnails[this.current];
    },
    getCurrentImage: function() {
        return this.images[this.current];
    },
    getCurrentThumbnailMessage: function() {
        return this.thumbnailMessages[this.current];
    },
    getCurrentContentMessage: function() {
        return this.contentMessages[this.current];
    },
    canScrollRight: function() { 
        return this.current < (this.thumbnails.length - 1);
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