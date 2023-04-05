import React from 'react';
import {UserObject} from './PetsData';




function MyProfile() {

    const object = UserObject();

    if (object.data === undefined) {
        // console.log("this object is undefined");
        return <h2>Loading...</h2>
    } else if (object.data === null) {
        // console.log("this object is null");
        return <h2>Loading...</h2>
    }

    // console.log(object);

    const donations = object.data.oneUser.donations;
    const fName = object.data.oneUser.firstName;
    const lName = object.data.oneUser.lastName;
    const email = object.data.oneUser.email;
      
    console.log(donations);

    

    return (
        <div className='main-parent'>
            <div className='main-article-parent'>
                <div className='profile-parent'>
                    <div className = "profile-upper">
                        <div className='profile'>
                            <h4 className='profile-username'>{fName} {lName}</h4>
                            <p className='profile-email'>{email}</p>
                        </div>
        
                    </div>
                    <div className='profile-lower'>
                        {donations.map(donation => (
                            <div className='history-parent' key={donation._id}>
                                <div className='history-pet'>{donation.pet.name}</div>
                                <div className='history-amount'>${donation.amount}</div>
                                <div className='history-date'>{new Date(parseInt(donation.donationDate)).toLocaleDateString()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>  
    );
}





export default MyProfile;