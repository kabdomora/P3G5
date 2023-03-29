import React, { useState } from 'react';
import LoginModal from './LoginModal';
import Auth from '../utils/auth';

function Header() {
    const [showModal, setShowModal] = useState(false);

      const handleModalOpen = () => {
      setShowModal(true);
    };

    return (
        <div className='main-header-parent'>
            <div className='upper-header'>
                {Auth.loggedIn() ? (
                    <button className='login-btn' onClick={Auth.logout}>Logout</button>
                ) : (
                    <button className='login-btn' onClick={handleModalOpen}>Login/Sign Up</button>
                )}

                <LoginModal showModal={showModal} setShowModal={setShowModal} />
            </div>
            <div className='central-header'>
                <h1 className='site-title'><span className='title-span'>Anim</span>-Aid</h1>
            </div>
            <div className='lower-header'>
                <button className='header-btn'>Pets</button>
                <button className='header-btn'>About</button>
                <button className='header-btn'>Donate</button>
            </div>
        </div>
    );
}
    
export default Header;