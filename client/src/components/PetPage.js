import React from 'react';
import { useHistory } from 'react-router-dom';

function Pet(props) {
    const history = useHistory();
    const petName = props.petName;

    // Change the URL to /pet/{petName}
    history.push(`/pet/${petName}`);
  
 
}





export default PetPage;