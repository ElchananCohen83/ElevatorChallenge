document.addEventListener("DOMContentLoaded", function () {
    const building = document.getElementById('building');

    const elevators = [
        new Elevator(1, 420),
        new Elevator(2, 540),
        new Elevator(3, 660)
    ];

    elevators.forEach(elevator => elevator.appendTo(building));

    async function requestElevator(floorNumber) {
        let closestElevator = null;
        let minDistance = Number.MAX_SAFE_INTEGER;

        elevators.forEach(elevator => {
            const distance = Math.abs(elevator.currentFloor - floorNumber);
            if (distance < minDistance && !elevator.isMoving) {
                minDistance = distance;
                closestElevator = elevator;
            }
        });

        if (closestElevator) {
            await closestElevator.moveToFloor(floorNumber);
        }
    }

    for (let i = 0; i < 25; i++) {
        const floor = new Floor(i, requestElevator);
        floor.prependTo(building);
    }
});
