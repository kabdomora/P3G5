import React from 'react';
import MenuProp from './PetsProps';
import { leftPets, rightPets } from './PetsData';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';




function PetsMain() {

  const navigate = useNavigate();

  const handlePetClick = (petName) => {
    navigate(`/pet/${petName}`);
  };

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
                onClick={() => handlePetClick(pet.petName)}
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
                onClick={() => handlePetClick(pet.petName)}
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