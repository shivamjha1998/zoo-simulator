class Animal {
    constructor(name) {
        this.name = name;
        this.health = 100.0;
        this.isDead = false;
    }

    decrementHealth(percent) {
        this.health -= this.health * (percent / 100);
        if (this.health < 0){
            this.health = 0;
        }
    }

    incrementHealth(percent) {
        this.health += this.health * (percent / 100);
        if (this.health > 100) {
            this.health = 100;
        }
    }
}

export default Animal;