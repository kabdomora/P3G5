import React, { useState, useEffect, useCallback } from 'react';
import { ADD_DONATION } from '../utils/mutations';
import { PetsOptions } from './PetsData';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

function DonationModal(props) {
  const [selectedPet, setSelectedPet] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);

  const [userData, setUserData] = useState({});
  const [addDonation] = useMutation(ADD_DONATION);


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

  const getUserData = useCallback(async () => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }

       const { data } = Auth.getProfile(token);
       const user = data;

       if (!user) {
         return false;
       }

       console.log(user);
       console.log("user");

      setUserData(user);
    } catch (err) {
      console.error(err);
    }
  }, [setUserData]);

  useEffect(() => {
    getUserData();
    console.log('effect');
  }, [donationAmount, getUserData]);

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
                  {PetsOptions()}
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