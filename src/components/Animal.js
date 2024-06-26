import React, { useEffect, useState } from 'react';
import HealthBar from './HealthBar';

// Import Icons
import HappyElephant from '../icons/ElephantHappy.jpg';
import HappyGiraffe from '../icons/GiraffeHappy.jpg';
import HappyMonkey from '../icons/MonkeyHappy.jpg';
import Dead from '../icons/Dead.jpg';
import BrokenElephant from '../icons/BrokenElephant.jpg';

// Import css
import './Main.css';


const Animal = ({ animal, isMobile }) => {
  // Function to determine the correct icon
  const getAnimalIcon = () => {
    if (animal.isDead) {
      return Dead;
    } else if (animal.constructor.name === 'Elephant') {
      return animal.canWalk ? HappyElephant : BrokenElephant;
    } else if (animal.constructor.name === 'Giraffe') {
      return HappyGiraffe;
    } else if ( animal.constructor.name === 'Monkey') {
      return HappyMonkey;
    }
  };

  // Function to get the status message
  const getStatusMessage = () => {
    if (animal.isDead) {
      return <span className="text-danger">Dead</span>;
    } else if (animal.constructor.name === 'Elephant' && !animal.canWalk) {
      return <span className="text-warning">Cannot Walk</span>;
    }
    return <HealthBar health={animal.health} />;
  };

  // Function to get jump animation
  const [isJumping, setIsJumping] = useState(false);
  useEffect(() => {
    const makeAnimalJump = () => {
      // Randomly decide if the animal should jump
      if (Math.random() < 0.5) {
        setIsJumping(true);
        setTimeout(() => {
          setIsJumping(false);
        }, 500); // The duration should match the length of your jump animation
      }
    };
    // Set an interval for how often the animal should consider jumping
    const intervalId = setInterval(makeAnimalJump, 2000); // Adjust as needed

    return () => clearInterval(intervalId);
  }, []);

  // Include the icon in the component's render output
  return (
    <div className={`card mb-3  ${isMobile ? 'mobile-card' : ''}`} style={isMobile ? { maxWidth: '100%' } : { maxWidth: '540px' }}>
      <div className="row g-0">
        <div className={`col-md-4 ${isJumping && !animal.isDead ? 'animal-jump' : ''}`}>
        <img
          src={getAnimalIcon()}
          className={`img-fluid ${!animal.isDead ? "alive" : ""}`}
          alt={animal.constructor.name}
        />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{animal.constructor.name}</h5>
            <p className="card-text">{getStatusMessage()}</p>
            <p className="card-text"><small className="text-muted">Current Health: {animal.health.toFixed(2)}%</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;
