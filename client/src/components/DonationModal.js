import React, { useState } from 'react';

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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <h2>Make a Donation</h2>
          <div>
            <label htmlFor="pets">Select a Pet:</label>
            <select id="pets" value={selectedPet} onChange={handlePetSelect}>
              <option value="">Select a Pet</option>
              {props.pets.map((pet) => (
                <option key={pet.id} value={pet.name}>
                  {pet.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="amount">Select an Amount:</label>
            <select id="amount" value={donationAmount} onChange={handleAmountSelect}>
              <option value="0">Select an Amount</option>
              <option value="5">$5</option>
              <option value="10">$10</option>
              <option value="20">$20</option>
            </select>
          </div>
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
}

export default DonationModal;