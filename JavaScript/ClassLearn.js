class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


var train = new Train("Red", false);

// console.log(train);

// train.toggleLights();
// train.lightsStatus();
// train.getSelf();
// train.getPrototype();


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeenOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeenOn = highSpeenOn;
    }
    toggleHighSpeed() {
        this.highSpeenOn = !this.highSpeenOn;
        console.log("High Speed Status: ", this.highSpeenOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational.");
    }
}

var train1 = new Train("Blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "Green", false);

train1.toggleLights();
// train1.lightsStatus();

// highSpeed1.toggleLights();
train1.getPrototype();
highSpeed1.getPrototype();
























