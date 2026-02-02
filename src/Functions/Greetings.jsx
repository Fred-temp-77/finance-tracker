import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      let newGreeting;

      if (currentHour >= 5 && currentHour < 12) {
        newGreeting = 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 18) {
        newGreeting = 'Good Afternoon';
      } else {
        newGreeting = 'Good Evening'; 
      }
      setGreeting(newGreeting);
    };

    updateGreeting();

    const intervalId = setInterval(updateGreeting, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{greeting}!</h1>
    </div>
  );
};

export default Greeting;
