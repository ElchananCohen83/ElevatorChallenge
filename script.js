document.addEventListener("DOMContentLoaded", function() {
    const building = document.getElementById('building');

    const imgContainer1 = document.createElement('div');
    imgContainer1.className = 'elevator-container1';
    const img1 = document.createElement('img');
    img1.src = './Public/elv.png';
    img1.className = 'elevator-img1';
    imgContainer1.appendChild(img1);

    const imgContainer2 = document.createElement('div');
    imgContainer2.className = 'elevator-container2';
    const img2 = document.createElement('img');
    img2.src = './Public/elv.png';
    img2.className = 'elevator-img2';
    imgContainer2.appendChild(img2);

    const imgContainer3 = document.createElement('div');
    imgContainer3.className = 'elevator-container3';
    const img3 = document.createElement('img');
    img3.src = './Public/elv.png';
    img3.className = 'elevator-img3';
    imgContainer3.appendChild(img3);

    building.appendChild(imgContainer1);
    building.appendChild(imgContainer2);
    building.appendChild(imgContainer3);

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
