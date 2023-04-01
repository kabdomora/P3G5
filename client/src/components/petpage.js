import React from 'react';

import { PetsArray } from './PetsData';
import { useParams } from 'react-router-dom';

function PetPage() {
    const PetsData = PetsArray();


    const name  = useParams();
    console.log(name.petName);
    const petId = PetsData.find((thisPet) => thisPet.petName === name.petName)?.id;
    console.log(petId);
    const pet = PetsData.find((thisPet) => thisPet.id === petId);
    console.log(pet);

    return (
        <div className='main-parent'>
            <div className='main-article-parent'>
                {/* <h2 className='article-title'>{pet.petName}</h2> */}
                <h2 className='article-title'>Pet Name</h2>
                <div className='petpage-article-parent'>
                    <div className = "petpage-left">
                        <div className='petpage-img-container'>
                            {/* <img className = "petpage-img" alt={pet.alt} src={pet.picture}></img> */}
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

