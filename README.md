Project Specification Document
Overview
This project aims to simulate an elevator system in a multi-floor building using HTML, CSS, and JavaScript. The simulation includes 25 floors and 3 elevators, each capable of responding to user requests to move between floors. The project is structured using Object-Oriented Programming (OOP) principles, where each elevator and floor is represented as an object.

Project Structure
HTML: Defines the structure of the building interface, including floors and elevators.
CSS: Styles the building, floors, buttons, and elevators to ensure a visually appealing and responsive design.
JavaScript: Divided into multiple files for better organization and separation of concerns:
Elevator.js: Defines the Elevator class.
Floor.js: Defines the Floor class.
main.js: Handles initialization and the main logic for the elevator movement.
Classes
Elevator Class (Elevator.js):

Properties:
id: Identifier for the elevator.
currentFloor: The current floor of the elevator.
isMoving: Boolean indicating if the elevator is currently moving.
element: DOM element representing the elevator.
Methods:
constructor(id, leftPosition): Initializes the elevator with an ID and a position.
createElevator(): Creates the HTML representation of the elevator.
moveToFloor(floorNumber): Moves the elevator to a specified floor with smooth animation and sound effects.
appendTo(parent): Appends the elevator element to a parent container in the DOM.
Floor Class (Floor.js):

Properties:
number: Floor number.
button: DOM element representing the call button.
element: DOM element representing the floor.
Methods:
constructor(number, requestElevatorCallback): Initializes the floor with a number and a callback function for requesting an elevator.
createFloor(): Creates the HTML representation of the floor and its call button.
requestElevator(): Handles the logic for requesting an elevator and changing the button color.
prependTo(parent): Prepends the floor element to a parent container in the DOM.
Main Logic (main.js)
The main logic initializes the building with elevators and floors, and handles the elevator request and movement logic.

Key Functions:

requestElevator(floorNumber): Determines the closest available elevator and moves it to the requested floor.
Elevator Movement Algorithm
Initialization:

Create instances of Elevator and Floor classes.
Append these instances to the DOM, setting up the building structure.
Elevator Request Handling:

When a floor button is pressed, the requestElevator function is invoked.
The function iterates through all elevators to find the closest one that is not currently moving.
The distance between the elevator's current floor and the requested floor is calculated.
The closest elevator is selected and moved to the requested floor.
Elevator Movement:

The moveToFloor method of the Elevator class is called with the target floor number.
This method calculates the new position based on the floor height and animates the elevator's movement smoothly.
Once the elevator reaches the target floor, a sound is played, and the elevator pauses for 2 seconds before becoming available for new requests.
Button Color Change:

When a floor button is pressed, its color changes to green.
Once the elevator reaches the requested floor, the button color reverts to its original state.
Key Features
Smooth Elevator Movement:

Elevators move at a speed of half a second per floor, with smooth animation to represent the movement.
Sound Effect:

A sound is played when an elevator reaches the target floor, enhancing the user experience.
Visual Feedback:

The floor button changes color upon request and reverts back once the elevator arrives, providing clear visual feedback.
Conclusion
This project simulates an elevator system using modern web technologies and OOP principles, ensuring clean code and a maintainable structure. The main algorithm efficiently handles elevator requests, ensuring prompt responses and smooth animations, providing a realistic and engaging user experience.
