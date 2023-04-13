import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookedRocket } from '../redux/my-profile/profileSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(getBookedRocket());
  }, []);

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
