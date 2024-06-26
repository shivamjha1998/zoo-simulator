import React, { useState, useEffect } from 'react';
import Animal from './Animal';
import ActionButton from './ActionButton';
import Clock from './Clock';
import Monkey from '../classes/Monkey';
import Giraffe from '../classes/Giraffe';
import Elephant from '../classes/Elephant';
import './Main.css';

const Zoo = () => {
  // Dynamic state for screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // State of clock
  const [currentTime, setCurrentTime] = useState(new Date(new Date().setHours(8, 0, 0, 0)));
  useEffect(() => { 
    // Set up an interval to update the clock every second
    const intervalId = setInterval(() => {
        setCurrentTime(current => new Date(current.getTime() + 1000));
    }, 1000);
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  // Initialize state with 5 of each animal type
  const [monkeys, setMonkeys] = useState(Array(5).fill().map(() => new Monkey()));
  const [giraffes, setGiraffes] = useState(Array(5).fill().map(() => new Giraffe()));
  const [elephants, setElephants] = useState(Array(5).fill().map(() => new Elephant()));

  // Method to check animal health and update status if necessary
  const updateAnimalStatus = (animals, setAnimals, threshold) => {
    const updateAnimals = animals.map(animal => {
        // If health is below threshold, the animal is considered dead
        if (animal.health < threshold) {
            animal.isDead = true;
        }
        return animal;
    });
    setAnimals(updateAnimals);
  };

  // Method to simulate the passage of time
  const passTime = () => {
    // Add one hour to the current time
    setCurrentTime(new Date(currentTime.getTime() + 60 * 60 * 1000));
    // Helper function to calculate new health
    const calculateNewHealth = (animalArray, decrement) => {
        return animalArray.map(animal => {
          const randomPercentage = Math.random() * decrement;
          animal.decrementHealth(randomPercentage);
          return animal;
        });
      };
  
      setMonkeys(calculateNewHealth(monkeys, 20));
      setGiraffes(calculateNewHealth(giraffes, 20));
      setElephants(calculateNewHealth(elephants, 20));

      // Check for dead animals
      updateAnimalStatus(monkeys, setMonkeys, 30); // Monkey's threshold
      updateAnimalStatus(giraffes, setGiraffes, 50); // Giraffe threshold

      const updatedElephants = elephants.map(elephant => {
        if (elephant.health < 70) {
            elephant.canWalk  = false;
            if (!elephant.wasAbleToWalkLastHour) {
                elephant.isDead = true;
            }
            elephant.wasAbleToWalkLastHour = false;
        } else {
            elephant.canWalk = true;
            elephant.wasAbleToWalkLastHour = true;
        }
        return elephant;
      });
      setElephants(updatedElephants);
  };

  // Method to feed the animals
  const feedAnimals = () => {
    // Helper function to calculate increased health
    const calculateIncreasedHealth = (animalArray, increment) => {
        return animalArray.map(animal => {
          const randomPercentage = 10 + Math.random() * (increment - 10);
          const newHealth = animal.health + animal.health * (randomPercentage / 100);
          animal.incrementHealth(randomPercentage);

          // Ensure health does not exceed 100%
          if (newHealth > 100) {
            animal.health = 100;
          }

          // For elephants, additionally check if they can walk
          if (animal.constructor.name === 'Elephant') {
            animal.canWalk = animal.health >= 70;
          }

          return animal;
        });
    };

    // Feed each type of animal and update their health
    setMonkeys(calculateIncreasedHealth(monkeys, 25));
    setGiraffes(calculateIncreasedHealth(giraffes, 25));

    // Update elephants and their ability to walk
    const updatedElephants = calculateIncreasedHealth(elephants, 25);
    setElephants(updatedElephants);
  };


  // Render the zoo with Animal components for each animal
  return (
    <div className={`container mt-4`}>
      <h1 className="text-center mb-4">Zoo Simulator</h1>
      <Clock currentTime={new Date(currentTime)} />
      <div className="row">
        <div className="col-md-4">
          <h2>Monkeys</h2>
          {monkeys.map((monkey, index) => (
            <Animal key={`monkey-${index}`} animal={monkey} isMobile={isMobile} />
          ))}
        </div>
        <div className="col-md-4">
          <h2>Giraffes</h2>
          {giraffes.map((giraffe, index) => (
            <Animal key={`giraffe-${index}`} animal={giraffe} isMobile={isMobile} />
          ))}
        </div>
        <div className="col-md-4">
          <h2>Elephants</h2>
          {elephants.map((elephant, index) => (
            <Animal key={`elephant-${index}`} animal={elephant} isMobile={isMobile} />
          ))}
        </div>
      </div>
      <div className="actions mb-4">
      <ActionButton 
        text="Feed Animals" 
        onClick={feedAnimals} 
        className="feed-animals-button" 
      />
      <ActionButton 
        text="Pass Time" 
        onClick={passTime} 
        className="pass-time-button" 
      />
      </div>
    </div>
  );
};

export default Zoo;
