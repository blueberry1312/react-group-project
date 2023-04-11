import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
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
      <p>Rocket Page</p>
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id}>
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <p>{rocket.id}</p>
            <p>{rocket.flicker_image[0]}</p>
            <p>{rocket.flicker_image[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
