import React, { useState } from 'react';
import { modalPetsData } from './PetsData';

function DonationModal(props) {
  const [selectedPet, setSelectedPet] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);

  const handlePetSelect = (event) => {
    setSelectedPet(event.target.value);
  };

  const handleAmountSelect = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Donating ${donationAmount} to ${selectedPet}`);
  };

  return (
    <div className="donation-modal">
      <div className="modal-content">
        <span className="donation-close-btn" onClick={props.onClose}>
          &times;
        </span>
        <form className = "donate-modal-form" onSubmit={handleSubmit}>
          <h2 className='modal-header'>Make a Donation!</h2>
          <div className='lower-donate-modal'>
          <div className='dModal-selector-parent'>
              <label className='modal-text' htmlFor="pets-select">Select a </label>
              <select id="dModal-selector" value={selectedPet} onChange={handlePetSelect}>
                  <option value="">Pet</option>
                  {modalPetsData()}
                </select>
            </div>
            <div className='dModal-selector-parent'>
            <label className='modal-text' htmlFor="amount">Choose donation </label>
            <select id="dModal-selector" value={donationAmount} onChange={handleAmountSelect}>
              <option value="0">Amount</option>
              <option value="5">$5</option>
              <option value="10">$10</option>
              <option value="20">$20</option>
            </select>
            </div>
          </div>
          <button className='donate-submit-btn' type="submit">Submit!</button>
        </form>
      </div>
    </div>
  );
}

export default DonationModal;