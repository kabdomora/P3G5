import React from 'react';
import MenuProp from './PetsProps';
import { leftPets, rightPets } from './PetsData';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function PetsMain() {
  return (
    <div className='main-parent'>
      <div className='main-article-parent'>
        <h2 className='article-title'>Pets</h2>
        <div className='pets-menu-parent'>
          <div className='pets-menu-col'>
            {leftPets.map((pet, index) => (
              <MenuProp
                key={index}
                petName={pet.petName}
                picture={pet.picture}
                alt={pet.alt}
                pMenuDescription={pet.pMenuDescription}
                pMenuSubHeader={pet.pMenuSubHeader}
                pMenuSubTxt={pet.pMenuSubTxt}
                icon={faPaw}
                link={pet.link}
              />
            ))}
          </div>
          <div className='pets-menu-col'>
            {rightPets.map((pet, index) => (
              <MenuProp
                key={index}
                petName={pet.petName}
                picture={pet.picture}
                alt={pet.alt}
                pMenuDescription={pet.pMenuDescription}
                pMenuSubHeader={pet.pMenuSubHeader}
                pMenuSubTxt={pet.pMenuSubTxt}
                icon={faPaw}
                link={pet.link}
              />
            ))}
          </div>
        </div>
        <div className='invisa-footer'></div>
      </div>
      
    </div>
  );
}

export default PetsMain;