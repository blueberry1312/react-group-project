import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookRocket, fetchRockets } from '../redux/rockets/rocketsSlice';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleBookRocket = (rocketId) => {
    dispatch(bookRocket(rocketId));
  };

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
        <div className="Rockets-preloader" />
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>unable to load the Rockets...</p>
        <p>
          Error:
          {error}
        </p>
      </>
    );
  }

  return (
    <div className="Rockets">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="Rockets-container">
          <img
            src={rocket.flickr_images[0]}
            alt={rocket.name}
            className="Rocket-img"
          />

          <div className="Rockets-content">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button type="submit" className="Rockets-button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
