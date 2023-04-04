import React, { useEffect, useState, useCallback } from 'react';
import { QUERY_ME } from "../utils/queries";
import { useLazyQuery } from '@apollo/client';
import Auth from '../utils/auth';



function useGetUser() {

    const [userData, setUserData] = useState({});
    

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

    // function useGetUser() {
    //     const [queryUser, {data, loading, error}] = useLazyQuery(QUERY_ME);

    //     useEffect(() => {
    //         const user = userData.
    //     })

    // }

    

    useEffect(() => {
        // getUserData();
        console.log("on load");
    });
}

function MyProfile() {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('/donations')
        .then(res => res.json())
        .then(data => setDonations(data));
    }, []);
    

    return (
        <div className='main-parent'>
            <div className='main-article-parent'>
                <div className='profile-parent'>
                    <div className = "profile-upper">
                        <div className='profile'>
                            <h4 className='profile-username'>JD.Salinger</h4>
                            <p className='profile-email'>test@email.com</p>
                        </div>
        
                    </div>
                    <div className='profile-lower'>
                        {donations.map(donation => (
                            <div className='history-parent' key={donation._id}>
                                <div className='history-pet'>{donation.pets[0].name}</div>
                                <div className='history-amount'>{donation.amount}</div>
                                <div className='history-date'>{new Date(donation.donationDate).toLocaleDateString()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>  
    );
}





export default MyProfile;