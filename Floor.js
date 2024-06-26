class Floor {
    constructor(number) {
        this.number = number;
        this.element = this.createFloor();
    }

    createFloor() {
        const floor = document.createElement('div');
        floor.className = 'floor';

        const topBorder = document.createElement('div');
        topBorder.className = 'top-border';

        const button = document.createElement('button');
        button.className = 'metal linear';
        button.value = this.number;
        button.textContent = this.number;

        floor.appendChild(topBorder);
        floor.appendChild(button);

        return floor;
    }

    prependTo(parent) {
        parent.insertBefore(this.element, parent.firstChild);
    }
}
