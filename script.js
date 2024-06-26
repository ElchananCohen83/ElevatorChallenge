document.addEventListener("DOMContentLoaded", function () {
    const building = document.getElementById('building');

    // Create elevator containers and images
    const createElevator = (className, leftPosition) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = className;
        imgContainer.style.left = `${leftPosition}px`;

        const img = document.createElement('img');
        img.src = './Public/elv.png';
        img.className = 'elevator-img';

        imgContainer.appendChild(img);
        building.appendChild(imgContainer);
    };

    // Add three elevators
    createElevator('elevator-container', 420);
    createElevator('elevator-container', 540);
    createElevator('elevator-container', 660);

    // Create floors
    for (let i = 0; i < 25; i++) {
        const floor = document.createElement('div');
        floor.className = 'floor';

        const topBorder = document.createElement('div');
        topBorder.className = 'top-border';

        const button = document.createElement('button');
        button.className = 'metal linear';
        button.value = i;
        button.textContent = i;

        floor.appendChild(topBorder);
        floor.appendChild(button);

        building.insertBefore(floor, building.firstChild);
    }
});
