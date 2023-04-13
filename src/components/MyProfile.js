import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) =>
    state.rockets.rockets.filter((rocket) => rocket.reserved)
  );

  return (
    <div>
      <p>Profile page</p>
      <div className="Rockets">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="Rockets-container">
            <p>{rocket.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
