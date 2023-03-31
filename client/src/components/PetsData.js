import React, { useState, useEffect } from 'react';
/* Pictures Imported as Var here */
import pet1 from "../assets/Loretta.png"
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
      <option key={pet._id} value={pet.name}>
        {pet.name}
      </option>
    ));

}


const PetsData = [
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 142
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 123

    },
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 345
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 456

    },
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 543
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 1678

    },
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 3234
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 4567

    }
]


function modalPetsData() {
    return PetsData.map((pet) => (
        <option key={pet.id} value={pet.petName}>
          {pet.petName}
        </option>
      ));
}
  

const midIndex = Math.ceil(PetsData.length / 2);
const leftPets = PetsData.slice(0, midIndex);
const rightPets = PetsData.slice(midIndex);



export  {leftPets, rightPets, modalPetsData, PetsOptions }

