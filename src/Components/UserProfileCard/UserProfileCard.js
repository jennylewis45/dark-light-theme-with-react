import React from 'react';
import './UserProfileCard.css'
import profile_icon from '../assests/ava-1.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';




const UserProfileCard = () => {
 

  return (

    <>
    
      <div className='gradient'></div>
      <div className='profileCard'>
        <div className='profile-down'>
          <img src={profile_icon} alt='' />
          <div className='profile-title'>
            Elon Mask
          </div>
          <div className='profile-title'>
            Designer
          </div>
          <div className='profile-icon'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className='profile-description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className='inside-box'>
            <FaFacebookF /> 
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className='inside-box-text'>
            STUDIO
            WORK
            FAVORITE
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UserProfileCard;
