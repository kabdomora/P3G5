import React from 'react';

import { PetsData } from './PetsData';
import { useParams } from 'react-router-dom';

function PetPage() {
    const { petName } = useParams();
    console.log(petName);
    const petId = PetsData.find((pet) => pet.petName === petName)?.id;
    console.log(petId);
    const pet = PetsData.find((pet) => pet.id === petId);

    return (
        <div className='main-parent'>
            <div className='main-article-parent'>
                <h2 className='article-title'>{pet.petName}</h2>
                <div className='main-article'>
                    <p></p>
                </div>
            </div>
        </div>
        
    );
}





export default PetPage;

