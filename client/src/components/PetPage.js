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
                <div className='petpage-article-parent'>
                    <div className = "petpage-left">
                        <div className='petpage-img-container'>
                            <img className = "petpage-img" src={pet.picture}></img>
                        </div>
                        

                    </div>
                    <div className='petpage-right'>
                        <div className='petpage-section'></div>
                        <div className='petpage-section'></div>
                        <div className='petpage-section'></div>


                       


                    </div>
                </div>
            </div>
        </div>
        
    );
}





export default PetPage;

