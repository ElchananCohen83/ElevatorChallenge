class Elevator {
    constructor(id, leftPosition) {
        this.id = id;
        this.leftPosition = leftPosition;
        this.currentFloor = 0;
        this.element = this.createElevator();
    }

    createElevator() {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'elevator-container';
        imgContainer.style.left = `${this.leftPosition}px`;
        imgContainer.style.top = '2640px';

        const img = document.createElement('img');
        img.src = './Public/elv.png';
        img.className = 'elevator-img';

        imgContainer.appendChild(img);
        return imgContainer;
    }

    moveToFloor(floorNumber) {
        const floorHeight = 110;
        const newTop = 2640 - (floorNumber * floorHeight);
        this.element.style.top = `${newTop}px`;
        this.currentFloor = floorNumber;
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }
}
