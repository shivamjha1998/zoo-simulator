import Animal from './Animal';

class Elephant extends Animal {
    constructor() {
        super();
        this.canWalk = true;
        this.wasAbleToWalkLastHour = true;
    }
}

export default Elephant;