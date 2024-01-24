
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import ProfileForm from './ProfileForm/ProfileForm';
import './App.css'

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleRegistrationSubmit = (data) => {
    if (data.confirmationCode === '1234') {
      setUserData(data);
    } else {
      alert('Invalid confirmation code');
    }
  };

  const handleProfileSubmit = (data) => {
    console.log('User Data:', { ...userData, ...data });
  };

  return (
    <div>
      {!userData ? (
        <RegistrationForm onSubmit={handleRegistrationSubmit} />
      ) : (
        <ProfileForm onSubmit={handleProfileSubmit} />
      )}
    </div>
  );
};

export default App;
