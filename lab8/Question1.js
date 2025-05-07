class Meditation {
    constructor(minutes) {
        this.minutes = minutes;
    }
    start() {
        console.log("Start meditation");
        this.countDown(this.minutes);
    }

    countDown(time) {
        if (time > 0) {
            console.log(time);
            setTimeout(() => { this.countDown(time - 1);}, 1000);
        } else {
            console.log("Jay Guru Dev");
        }
    }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
