import React from 'react';
/* Pictures Imported as Var here */
import pet1 from "../assets/Loretta.png"

const PetsData = [
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 0
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 1

    },
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 3
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 4

    },
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 0
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 1

    },
    {
        petName: "Loretta",
        picture: pet1,
        alt: "A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 3
    },
    {
        petName: "Jonny",
        picture: pet1,
        alt: "A pictue of Jonnhy the test cat",
        pMenuDescription: "This is the test description",
        pMenuSubHeader: "Test sub header",
        pMenuSubTxt: "Test sub txt",
        id: 4

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



export  {leftPets, rightPets, modalPetsData}

