document.addEventListener("DOMContentLoaded", function () {
    const building = document.getElementById('building');

    const elevators = [
        new Elevator(1, 420),
        new Elevator(2, 540),
        new Elevator(3, 660)
    ];

    elevators.forEach(elevator => elevator.appendTo(building));

    for (let i = 0; i < 25; i++) {
        const floor = new Floor(i);
        floor.prependTo(building);
    }
});
