class Elevator {
    constructor(id, leftPosition) {
        this.id = id;
        this.leftPosition = leftPosition;
        this.element = this.createElevator();
    }

    createElevator() {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'elevator-container';
        imgContainer.style.left = `${this.leftPosition}px`;

        const img = document.createElement('img');
        img.src = './Public/elv.png';
        img.className = 'elevator-img';

        imgContainer.appendChild(img);
        return imgContainer;
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }
}