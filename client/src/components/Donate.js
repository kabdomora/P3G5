import React, {useState} from 'react';
import DonationModal from './DonationModal';



function Donate() {
    const [showModal, setShowModal] = useState(false);
    const handleDonateClick = () => {
        setShowModal(true);
    };


    return (
        <div className='main-parent'>
            <div className='main-article-parent'>
                <div className='donate-parent'>
                    <input type={'button'} className='donate-btn' onClick={handleDonateClick} />
                    {showModal && <DonationModal onClose={() => setShowModal(false)} />}

                    
                </div>
            </div>
        </div>
    );   
}

export default Donate