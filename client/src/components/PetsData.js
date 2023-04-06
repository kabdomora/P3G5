import React, { useEffect, useState, useCallback } from 'react';
import { QUERY_PETS, QUERY_PET, QUERY_ME } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
import Auth from '../utils/auth';


function useGetPets() {
    const [queryPets, { data, loading, error }] = useLazyQuery(QUERY_PETS);
  
    useEffect(() => {
      queryPets();
    }, [queryPets]);
  
    return { data, loading, error };
}

function useGetPet() {
  const [queryPet, {data, loading, error}] = useLazyQuery(QUERY_PET);

  useEffect(() => {
      const name = window.location.href.split('/')[4];
      console.log(name);
      queryPet(
          {
              variables: {
                  name: name,
              },
          }
      );
  }, [queryPet]);

  return {data, loading, error};
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
            link: `/pet/${pet.name}`,
        });
      });
    }

    return PetData;
}

function PetObject() {
  const { data, loading, error } = useGetPet();

  if (loading) {
      // console.log("loading");
      return null
  }

  if (error) {
      console.error(error);
      return null
  }
  
  return data;
  
}

function getUserData() {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }

       const { data } = Auth.getProfile(token);
       const user = data;

       if (!user) {
         return false;
       }

      //  console.log(user);
      //  console.log("user");

      return user;

    } catch (err) {
      console.error(err);
    }
};



function useGetUser() {
  const [queryUser, {data, loading, error}] = useLazyQuery(QUERY_ME);
  const user = getUserData();

  useEffect(() => {
    queryUser(
      {
        variables: {
          id: user._id,
          username: user.username
        },
      }
    );
  },[user._id, user.username, queryUser]);

  return {data, loading, error};

}

function UserObject() {
  const user = useGetUser();

  // console.log("UserObject");
  // console.log(user);

  return user;
}




export  { PetsOptions, PetsArray, PetObject, UserObject }

