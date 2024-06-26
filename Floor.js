class Floor {
    constructor(number, requestElevatorCallback) {
        this.number = number;
        this.requestElevatorCallback = requestElevatorCallback;
        this.element = this.createFloor();
    }

    createFloor() {
        const floor = document.createElement('div');
        floor.className = 'floor';

        const topBorder = document.createElement('div');
        topBorder.className = 'top-border';

        this.button = document.createElement('button');
        this.button.className = 'metal linear';
        this.button.value = this.number;
        this.button.textContent = this.number;
        this.button.addEventListener('click', () => this.requestElevator());

        floor.appendChild(topBorder);
        floor.appendChild(this.button);

        return floor;
    }

    async requestElevator() {
        this.button.style.color = 'green';
        await this.requestElevatorCallback(this.number);
        this.button.style.color = 'black';
    }

    prependTo(parent) {
        parent.insertBefore(this.element, parent.firstChild);
    }
}
