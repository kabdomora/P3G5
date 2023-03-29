import React from 'react';


function MenuProp(props) {
    return (
        <div className= "Pets-Menu-Componet-Parent">
            <div className='Pets-Menu-Componet-Upper'>
                <h3 className = 'pets-name'>{props.petName}</h3>
                <div className='menu-img-container'>
                    <img src={props.picture} alt={props.alt} className='pets-img' /> 
                </div>  
            </div>
            
            <div className='Pets-Menu-Lower-Parent'>
                <p className = 'Pets-Description-Menu'>{props.pMenuDescription}</p>
                <div className='Pets-Menu-Sub-Parent'>
                    <h4 className='Pets-Menu-Sub-Parent-Header'>{props.pMenuSubHeader}</h4>
                    <p className='Pets-Menu-Sub-Parent-Txt'>{props.pMenuSubTxt}</p>
                </div>
            </div>
        </div>
    );
}

export default MenuProp