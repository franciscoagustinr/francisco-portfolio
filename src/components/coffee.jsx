import React from 'react';
import CoffeeCup from '../assets/images/coffee-cup.png';

export const Coffee = ({ setDialogText }) => {
  return (
    <>
      <div className="absolute bottom-2 left-1">
        <img
          src={CoffeeCup}
          alt="Coffee Cup"
          className="shake relative w-24 -rotate-12 cursor-pointer select-none"
          onClick={() => {
            window.open('https://cafecito.app/franciscoagustinr', '_blank');
          }}
          onMouseEnter={() => setDialogText('Invite me a coffee! 🙂 ')}
          onMouseLeave={() => setDialogText('')}
        />
      </div>
    </>
  );
};
