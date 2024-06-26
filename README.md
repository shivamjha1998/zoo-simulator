# Zoo Simulatorß

## Overview

This project implements a Zoo Simulator as a single-page application using React. It's designed to demonstrate proficiency in object-oriented programming, responsive frontend design, and writing clean, maintainable code.

## Design Decisions

### Object-Oriented Programming

- **Animal Classes**: Created separate classes for `Monkey`, `Giraffe`, and `Elephant`, encapsulating the specific behaviors and properties of each animal type.
- **Inheritance**: Leveraged JavaScript's prototype inheritance to derive these specific animal classes from a base `Animal` class, promoting code reuse.
- **Methods**: Implemented methods like `incrementHealth` and `decrementHealth` within the animal classes to encapsulate health modification logic.

### Responsive Design

- **CSS Media Queries**: Used media queries to adapt the layout for mobile devices, ensuring a good user experience across all screen sizes.
- **Conditional Rendering**: In the React components, conditional rendering was used to display different UI elements based on the screen size.
- **Flexbox**: Utilized Flexbox for a flexible and responsive layout that adjusts to the content dynamically.

### Clean and Maintainable Code

- **Component Structure**: Broke down the UI into smaller components (`Animal`, `ActionButton`, `Clock`, etc.) to make the codebase more manageable and to improve readability.
- **State Management**: Centralized state within the top-level `Zoo` component and passed necessary state down to children as props, following best practices for React state management.
- **Hooks**: Made extensive use of React hooks (`useState`, `useEffect`) to handle state and side effects in a functional component style.

### User Experience

- **Interactive UI**: Added interactive elements like buttons with hover effects and animations to make the application engaging.
- **Feedback Mechanisms**: Implemented visual feedback such as health bars and status messages to inform users of the animals' health statuses.

### Creativity

- **Animations**: Introduced subtle animations for animal icons to add a playful touch to the simulator.

## Project Structure

The project is organized into several key directories:

- `src/components`: Contains all the React components used in the project.
- `src/classes`: Includes the JavaScript classes for the animal types.
- `src/icons`: Stores the animal icon images.

## Build Instructions

The project is set up to build with a standard installation of the development environment (Node.js and npm). Run `npm install` to install dependencies and `npm run build` to create a production build of the application.

## Notes

The `node_modules` directory has been excluded from the submission as per the instructions. Please run `npm install` to set up the project environment after unzipping the source code.

## Conclusion

This Zoo Simulator is designed with attention to detail and best practices in frontend development. The goal was to create an application that is not only functional but also visually appealing and user-friendly.
