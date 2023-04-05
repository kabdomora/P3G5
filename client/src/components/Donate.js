import React, {useState, useEffect} from 'react';
import DonationModal from './DonationModal';

function clickEvent(setPetPicture) {
  const modal = document.querySelector('.main-parent');
  modal.addEventListener("click", (event) => {
    const selectedPet = localStorage.getItem("selectedPet");

    setPetPicture(selectedPet);
  })
}

function Donate() {
    const [showModal, setShowModal] = useState(false);
    const [petPicture, setPetPicture] = useState(null);
    

    useEffect(() => {
      console.log("Pet Changed")
    },[setPetPicture, petPicture]);

    useEffect(() => {
      clickEvent(setPetPicture);
    },[setPetPicture])


    

    const handleDonateClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      localStorage.removeItem("selectedPet");
      setPetPicture(null);
    };

  
    const handleSelectPet = (pet) => {
      setPetPicture(pet);
      setShowModal(false);
    };
  
  
    return (
      <div className="main-parent">
        <div className="main-article-parent">
            {!showModal && <h2 className="article-title">Donate</h2>}
            <div className="donate-parent">
            {/* {selectedPet && ( */}
              <div className="donate-pic-parent">
                {petPicture && ( 
              <img src={`/pets/${petPicture}.png`} alt={`${petPicture}`} className="donate-pic-container" />
              )}
              </div>
            {/* )} */}


            {!showModal && (
              <button type={"button"} className="donate-btn" onClick={handleDonateClick}>
                Donate Now!
              </button>
            )}
            
            {showModal && <DonationModal onClose={handleCloseModal} onSelectPet={handleSelectPet} />}
          </div>
        </div>
      </div>
    );
  }


export default Donate