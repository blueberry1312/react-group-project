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
    <div className="Rockets">
      {rockets.map((rocket) => {
        const isBooked = rocket.reserved;
        const handleClick = isBooked ? handleCancelBooking : handleBookRocket;
        const badgeDisplayed = isBooked
          ? 'Rocket-display-badge'
          : 'Rocket-no-display-badge';

        return (
          <div key={rocket.id} className="Rockets-container">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className="Rocket-img"
            />
            <div className="Rockets-content">
              <h2>{rocket.name}</h2>
              <p>
                <span className={badgeDisplayed}>Booked</span>
                {rocket.description}
              </p>
              <button
                type="submit"
                className={isBooked ? 'cancel-button' : 'book-button'}
                onClick={() => handleClick(rocket.id)}
              >
                {isBooked ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
