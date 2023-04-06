import React from 'react';

function Main() {
  return (
    <div className='main-parent'>
      <div className='main-article-parent'>
        <h2 className='article-title'>About</h2>
        <div className='main-article'>
          <p>Welcome to Anim-Aid, where our mission is to rescue and support any animal in need! Our organization has plans to serve the community for years to come. We are dedicated to improving the lives of animals in need.</p>
          <p>Our team is made up of 5 passionate animal lovers who work tirelessly to provide care, shelter, and medical treatment to animals who have been abandoned, abused, or neglected. We believe that all animals deserve love, compassion, and a safe place to call home.</p>
          <p>At Anim-Aid, we take a comprehensive approach to animal welfare. Our services include adoption, spay/neuter, vaccination, fostering, and grooming. With the community's help we aim to work closely with local government agencies, law enforcement, and other animal welfare organizations to advocate for animal rights and promote responsible pet ownership.</p>
          <p>As a nonprofit organization, we rely on the generosity of our donors and volunteers to continue our vital work. We are grateful for the support of our community and are always looking for new ways to get involved and make a difference.
          Thank you for visiting our website, and we hope that you will consider supporting our mission to create a more compassionate world for animals.</p>
        </div>
      </div>
      <div className='main-goals'>
        <h2 className='goals-title'>Our Goals</h2>
        <div className='goals-container'>
          <div className='goal'>
            <h3 className='goal-title'>Animal Rescue</h3>
            <p className='goal-description'>Our primary goal is to care for animals! You can do your part by donating for certain needs.</p>
          </div>
          <div className='goal'>
            <h3 className='goal-title'>Education</h3>
            <p className='goal-description'>Educating a community about responsible pet ownership and animal welfare is key to creating a more compassionate world for animals!</p>
          </div>
          <div className='goal'>
            <h3 className='goal-title'>Community</h3>
            <p className='goal-description'>Only a strong community of helpful individuals can keep the site live which in turn, helps numerous pets! </p>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default Main;