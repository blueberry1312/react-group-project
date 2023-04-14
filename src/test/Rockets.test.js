import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rockets from '../components/Rockets';
import { bookRocket, cancelBooking } from '../redux/rockets/rocketsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/rockets/rocketsSlice', () => ({
  bookRocket: jest.fn(),
  cancelBooking: jest.fn(),
}));

describe('Rockets component', () => {
  const dispatchMock = jest.fn();
  const rocketsMock = [
    {
      id: 1,
      name: 'Rocket 1',
      reserved: false,
      flickr_images: [],
    },
    {
      id: 2,
      name: 'Rocket 2',
      reserved: true,
      flickr_images: [],
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) =>
      selector({
        rockets: {
          rockets: rocketsMock,
          isLoading: false,
          error: null,
        },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a list of rockets', async () => {
    const { getByText } = render(<Rockets />);

    await waitFor(() => {
      expect(getByText('Rocket 1')).toBeInTheDocument();
      expect(getByText('Rocket 2')).toBeInTheDocument();
    });
  });

  it('should render the "Reserve Rocket" button for non-booked rockets', async () => {
    const { getByText } = render(<Rockets />);

    await waitFor(() => {
      const reserveButton = getByText('Reserve Rocket');
      expect(reserveButton).toBeInTheDocument();
      fireEvent.click(reserveButton);
      expect(bookRocket).toHaveBeenCalledTimes(1);
      expect(bookRocket).toHaveBeenCalledWith(1);
    });
  });

  it('should render the "Cancel Reservation" button for booked rockets', async () => {
    const { getByText } = render(<Rockets />);

    await waitFor(() => {
      const cancelButton = getByText('Cancel Reservation');
      expect(cancelButton).toBeInTheDocument();
      fireEvent.click(cancelButton);
      expect(cancelBooking).toHaveBeenCalledTimes(1);
      expect(cancelBooking).toHaveBeenCalledWith(2);
    });
  });
});
