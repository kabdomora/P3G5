import React, {useState} from 'react';
import DonationModal from './DonationModal';


function Donate() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPet, setSelectedPet] = useState('');
  
    const handleDonateClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedPet('');
    };

    return (
      <div className="main-parent">
        <div className="main-article-parent">
            {!showModal && <h2 className="article-title">Donate</h2>}
            <div className="donate-parent">
            {selectedPet && (
              <div className="donate-pic-parent">
              <img src={`/pets/${selectedPet}.png`} alt={`${selectedPet} picture`} className="donate-pic-container" />
              </div>
            )}

            {!showModal && (
              <button type={"button"} className="donate-btn" onClick={handleDonateClick}>
                Donate Now!
              </button>
            )}
            
            {showModal && <DonationModal onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    );
  }


export default Donate