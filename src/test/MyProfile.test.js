import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../components/MyProfile';

const mockStore = configureStore([]);

describe('MyProfile component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          { id: 'falcon1', name: 'Falcon 1', reserved: true },
          { id: 'falcon9', name: 'Falcon 9', reserved: false },
          { id: 'falconheavy', name: 'Falcon Heavy', reserved: true },
        ],
      },
      missions: {
        missions: [
          { mission_id: 'mission1', mission_name: 'Mission 1', reserved: true },
          { mission_id: 'mission2', mission_name: 'Mission 2', reserved: false },
          { mission_id: 'mission3', mission_name: 'Mission 3', reserved: true },
        ],
      },
    });
  });

  it('renders mission and rocket lists with reserved items', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const missionListTitle = getByText('My Missions');
    expect(missionListTitle).toBeInTheDocument();

    const reservedMissions = store.getState().missions.missions.filter(
      (mission) => mission.reserved,
    );
    reservedMissions.forEach((mission) => {
      const missionName = getByText(mission.mission_name);
      expect(missionName).toBeInTheDocument();
    });

    const rocketListTitle = getByText('My Rockets');
    expect(rocketListTitle).toBeInTheDocument();

    const reservedRockets = store.getState().rockets.rockets.filter((rocket) => rocket.reserved);
    reservedRockets.forEach((rocket) => {
      const rocketName = getByText(rocket.name);
      expect(rocketName).toBeInTheDocument();
    });
  });
});
