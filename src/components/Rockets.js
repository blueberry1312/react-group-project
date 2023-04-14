import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookRocket, cancelBooking } from '../redux/rockets/rocketsSlice';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const error = useSelector((state) => state.rockets.error);

  const handleBookRocket = (rocketId) => {
    dispatch(bookRocket(rocketId));
  };

  const handleCancelBooking = (rocketId) => {
    dispatch(cancelBooking(rocketId));
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
    <div>
      <h2 className="h2-rockets">Rockets</h2>
      <div title="rockets-component" className="Rockets">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="Rockets-container">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className="Rocket-img"
            />
            <div className="Rockets-content">
              <h2>{rocket.name}</h2>
              <p>
                {(rocket.reserved
                && <span className="Rocket-display-badge">Booked</span>
                )}
                {rocket.description}
              </p>
              {(rocket.reserved

              && (
              <button
                type="submit"
                className="cancel-button"
                onClick={() => handleCancelBooking(rocket.id)}
              >
                Cancel Reservation
              </button>
              ))}

              {(!rocket.reserved
              && (
              <button
                type="submit"
                className="book-button"
                onClick={() => handleBookRocket(rocket.id)}
              >
                Reserve Rocket
              </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
