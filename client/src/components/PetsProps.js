import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuProp(props) {
  return (
    <div>
      <div className='pet-names-header'>
        <h2 className='pet-names'>{props.petName}</h2>
      </div>

      <div className='project-parent'>
        <div className='project-overlay'>
          <img src={props.picture} alt={props.alt} className='project-img' />
          <div className='project-description'>
            <div className='project-links-parent'>
              {props.icon && (
                <a className="icon" href="./animals/Loretta">
                  <FontAwesomeIcon icon={props.icon} className='iconcolor' beatFade />
                </a>
              )}

              {props.link && (
                <a className='project-link' href={props.link}>View project</a>
              )}
            </div>

            <div className='description-format'>
              <p>{props.pMenuDescription}</p>

              <h4 className='overlay-title'>{props.pMenuSubHeader}</h4>
              {props.pMenuSubHeader}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuProp;
/*
<p className = 'Pets-Description-Menu'></p>

        

































            /*
            <div className='menu-img-container'>
                <div className='menu-img-overlay'>
                <img src={props.picture} alt={props.alt} className='pets-img' /> 
                    <div className='Pets-Menu-Componet-Upper'>
                         


                       
                        
                
    
                    </div>  

                    <div className='Pets-Menu-Lower-Parent'>

                         {/* 
                        <div className='project-links-parent'>
                            {props.repo && (
                                <a className="icon" href={props.repo}>
                                     <FaGithub className='iconcolor' />
                                </a>
                            )}

                            {props.link && (
                                 <a className='project-link' href={props.link}>View project</a>
                            )}
                        </div>
                        
                        }
                    

                    </div>

                    <div className='Pets-Menu-Sub-Parent'>
                    <h4 className='Pets-Menu-Sub-Parent-Header'>{props.pMenuSubHeader}</h4>
                    <p className='Pets-Menu-Sub-Parent-Txt'>{props.pMenuSubTxt}</p>

                    </div>



                </div>
           
            </div>
        
    );
}

*/
















