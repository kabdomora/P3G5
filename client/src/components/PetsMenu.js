import React from 'react';
import MenuProp from './PetsProps';
import {PetsData, leftPets, rightPets}from './PetsData';

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
                            />
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetsMain;