import React, { useEffect } from 'react';
import { QUERY_PETS } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';



function useGetPets() {
    const [queryPets, { data, loading, error }] = useLazyQuery(QUERY_PETS);
  
    useEffect(() => {
      queryPets();
    }, [queryPets]);
  
    return { data, loading, error };
}
  
function PetsOptions() {
    const { data, loading, error } = useGetPets();
  
    if (loading) {
      return <option>Loading...</option>;
    }
  
    if (error) {
      console.error(error);
      return <option>Error loading pets</option>;
    }
  
    return data?.pets?.map((pet) => (
      <option key={pet._id} value={pet.name} name={pet._id}>
        {pet.name}
      </option>
    ));

}

function PetsArray() {
    const { data, loading, error } = useGetPets();
    const PetData = [];
  
    if (loading || error) {
      return PetData;
    }

    if (data) {
      data.pets.forEach((pet) => {
        PetData.push({
            value: pet.name,
            key: pet._id,
            id: pet._id,
            petName: pet.name,
            breed: pet.breed,
            age: pet.age,
            gender: pet.gender,
            // picture: pet.image,
            picture: '/pets/'.concat(pet.name,'.png'),
            alt: pet.alt,
            pMenuSubHeader: pet.headline,
            pMenuSubTxt: 'Test sub txt',
            pMenuDescription: pet.summary,
            link: '/pets/'.concat(pet.name,pet._id),
        });
      });
    }

    return PetData;
}




export  { PetsOptions, PetsArray }

