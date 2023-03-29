import React from 'react';
import MenuProp from './PetsProps';

/* Pictures Imported as Var here */
import pet1 from "../assets/Loretta.png"

function PetsMain() {
    return (
        <div className='main-parent'>
            <div className='main-article-parent'>
                <h2 className='article-title'>Pets</h2>
                <div className='pets-menu-parent'>
                    <div className='pets-menu-col'>

                        <MenuProp
                            petName = "Loretta"
                            picture = {pet1}
                            alt="A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'"
                            pMenuDescription = "This is the test description"
                            pMenuSubHeader = "Test sub header"
                            pMenuSubTxt = "Test sub txt"
                        />

                        <MenuProp
                            petName = "Loretta"
                            picture = {pet1}
                            alt="A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'"
                            pMenuDescription = "This is the test description"
                            pMenuSubHeader = "Test sub header"
                            pMenuSubTxt = "Test sub txt"
                        />

                    </div>
                    <div className='pets-menu-col'>
                        
                        <MenuProp
                            petName = "Loretta"
                            picture = {pet1}
                            alt="A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'"
                            pMenuDescription = "This is the test description"
                            pMenuSubHeader = "Test sub header"
                            pMenuSubTxt = "Test sub txt"
                        />

                        <MenuProp
                            petName = "Loretta"
                            picture = {pet1}
                            alt="A pictue of Loretta the cat looking unhappy, Kayla claims that Loretta has 'Resting Bitch Face'"
                            pMenuDescription = "This is the test description"
                            pMenuSubHeader = "Test sub header"
                            pMenuSubTxt = "Test sub txt"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}








export default  PetsMain;