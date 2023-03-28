import React from 'react';
import { FaGithub } from 'react-icons/fa';

function footer() {
    return (
     <div className='main-footer-parent'>
        <ul className='footer-content-box'>
        <li className='icon'>
            <a href="https://github.com/VulnusR">
              <FaGithub className='iconcolor' />
            </a>
          </li>
          <li className='icon'>
            <a href="https://github.com/kabdomora">
              <FaGithub className='iconcolor' />
            </a>
          </li>
          <li className='icon'>
            <a href="">
              <FaGithub className='iconcolor' />
            </a>
          </li>
          <li className='icon'>
            <a href="">
              <FaGithub className='iconcolor' />
            </a>
          </li>
          <li className='icon'>
            <a href="">
              <FaGithub className='iconcolor' />
            </a>
          </li>
        </ul>
     </div>
    );
}
    
export default footer;