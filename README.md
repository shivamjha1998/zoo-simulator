# Zoo Simulator

## Overview

This project implements a Zoo Simulator as a single-page application using React. It's designed to demonstrate proficiency in object-oriented programming, responsive frontend design, and writing clean, maintainable code.

The application simulates managing a zoo with different types of animals, each with distinct behaviors, health statuses, and interactions. Users can monitor animal health, interact through intuitive UI elements, and experience a visually engaging interface.

## Project Functionality

In this Zoo Simulator, users can:

- View and monitor health statuses of different animals (Monkey, Giraffe, Elephant).
- Interact with animals through action buttons to increase or decrease their health.
- Observe dynamic changes through visual feedback such as health bars and animations.
- Enjoy responsive design that adjusts seamlessly to different screen sizes.

## Screenshots

Add your app screenshots here to showcase the visuals and features.

| Welcome Screen                                                                                                | Updated Screen                                                                                                |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <img src="./src/assets/screeenshots/Screenshot 2025-03-20 at 23.05.51.png" alt="Welcome screen" width="200"/> | <img src="./src/assets/screeenshots/Screenshot 2025-03-20 at 23.06.02.png" alt="Updated screen" width="200"/> |

## Design Decisions

### Object-Oriented Programming

- **Animal Classes**: Created separate classes for `Monkey`, `Giraffe`, and `Elephant`, encapsulating the specific behaviors and properties of each animal type.
- **Inheritance**: Leveraged JavaScript's prototype inheritance to derive these specific animal classes from a base `Animal` class, promoting code reuse.
- **Methods**: Implemented methods like `incrementHealth` and `decrementHealth` within the animal classes to encapsulate health modification logic.

### Responsive Design

- **CSS Media Queries**: Used media queries to adapt the layout for mobile devices, ensuring a good user experience across all screen sizes.
- **Conditional Rendering**: In React components, conditional rendering was utilized to display different UI elements based on screen size.
- **Flexbox**: Implemented Flexbox for flexible and responsive layouts that adjust dynamically to content.

### Clean and Maintainable Code

- **Component Structure**: Broke down the UI into smaller components (`Animal`, `ActionButton`, `Clock`, etc.) for improved manageability and readability.
- **State Management**: Centralized state within the top-level `Zoo` component and passed necessary state down to child components via props.
- **Hooks**: Made extensive use of React hooks (`useState`, `useEffect`) to handle state and side effects.

### User Experience

- **Interactive UI**: Included interactive elements such as buttons with hover effects and animations.
- **Feedback Mechanisms**: Provided visual feedback, including health bars and status messages, to enhance user interaction.

### Creativity

- **Animations**: Integrated subtle animations for animal icons, enhancing the playful and engaging aspect of the simulator.

## Project Structure

The project is organized into several key directories:

- `src/components`: Contains all React components used.
- `src/classes`: Includes JavaScript classes defining animal behaviors and properties.
- `src/icons`: Stores animal icon images.

## Setup Instructions

Ensure you have Node.js and npm installed on your system.

```bash
npm install
npm run dev
```

The application will start in development mode, typically accessible at `http://localhost:3000`.

## Conclusion

This Zoo Simulator was crafted with careful attention to detail and adherence to best practices in frontend development. The objective was to produce an interactive, visually appealing, and user-friendly application.
