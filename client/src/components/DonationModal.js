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