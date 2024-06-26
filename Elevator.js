class Elevator {
    constructor(id, leftPosition) {
        this.id = id;
        this.leftPosition = leftPosition;
        this.currentFloor = 0;
        this.isMoving = false;
        this.element = this.createElevator();
        this.dingSound = new Audio('./Public/ding.mp3');
    }

    createElevator() {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'elevator-container';
        imgContainer.style.left = `${this.leftPosition}px`;
        imgContainer.style.top = '2640px'; // Initial position at floor 0

        const img = document.createElement('img');
        img.src = './Public/elv.png';
        img.className = 'elevator-img';

        imgContainer.appendChild(img);
        return imgContainer;
    }

    async moveToFloor(floorNumber) {
        if (this.isMoving) return;
        this.isMoving = true;

        const floorHeight = 110; // Height of each floor
        const newTop = 2640 - (floorNumber * floorHeight);
        const currentTop = parseInt(this.element.style.top);
        const distance = Math.abs(currentTop - newTop);
        const duration = distance * 0.5; // 0.5 seconds per floor

        this.element.style.transition = `top ${duration}ms linear`;
        this.element.style.top = `${newTop}px`;
        
        await new Promise(resolve => setTimeout(resolve, duration));
        
        this.dingSound.play();
        await new Promise(resolve => setTimeout(resolve, 2000));

        this.currentFloor = floorNumber;
        this.isMoving = false;
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }
}
