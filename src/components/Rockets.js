import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
        <div className="Rockets-loading" />
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>unable to load the Rockets...</p>
        <p>Error: {error}</p>
      </>
    );
  }

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <div className="Rockets-img">
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
          </div>
          <div className="Rockets-content">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
