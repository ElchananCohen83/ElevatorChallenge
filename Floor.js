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

        const button = document.createElement('button');
        button.className = 'metal linear';
        button.value = this.number;
        button.textContent = this.number;
        button.addEventListener('click', () => this.requestElevator());

        floor.appendChild(topBorder);
        floor.appendChild(button);

        return floor;
    }

    requestElevator() {
        this.requestElevatorCallback(this.number);
    }

    prependTo(parent) {
        parent.insertBefore(this.element, parent.firstChild);
    }
}
