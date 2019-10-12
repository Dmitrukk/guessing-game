class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        
        return Math.round((this.min+this.max)/2);
    }

    lower() {
        this.setRange(this.min, Math.round((this.min + this.max)/2));
    }

    greater() {
        this.setRange(Math.round((this.min + this.max)/2), this.max);
    }
}

module.exports = GuessingGame;
