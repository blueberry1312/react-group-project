import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../components/Missions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Missions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Mission 1 description',
            reserved: true,
          },
          {
            mission_id: '2',
            mission_name: 'Mission 2',
            description: 'Mission 2 description',
            reserved: false,
          },
          {
            mission_id: '3',
            mission_name: 'Mission 3',
            description: 'Mission 3 description',
            reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });
  });

  it('renders the mission table', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(getByText('Mission Name')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Join/Leave')).toBeInTheDocument();
  });

  it('renders mission data', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(getAllByText('Mission 1')[0]).toBeInTheDocument();
    expect(getAllByText('Mission 1 description')[0]).toBeInTheDocument();
    expect(getAllByText('Active Member')[0]).toBeInTheDocument();
    expect(getAllByText('Leave Mission')[0]).toBeInTheDocument();
    expect(getAllByText('Mission 2')[0]).toBeInTheDocument();
    expect(getAllByText('Mission 2 description')[0]).toBeInTheDocument();
    expect(getAllByText('Mission 3')[0]).toBeInTheDocument();
    expect(getAllByText('Mission 3 description')[0]).toBeInTheDocument();
    expect(getAllByText('NOT A MEMBER')[0]).toBeInTheDocument();
    expect(getAllByText('Join Mission')[0]).toBeInTheDocument();
  });

  it('test if is calling to joinMission action when join button is clicked', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const actions = store.getActions();
    expect(actions.length).toBe(0);
    fireEvent.click(getAllByText('Join Mission')[0]);
    expect(actions.length).toBe(1);
    await waitFor(() => {
      expect(actions.length).toBe(2);
    });
  });

  it('test if is calling to leaveMission action when leave button is clicked', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const actions = store.getActions();
    expect(actions.length).toBe(0);
    fireEvent.click(getByText('Leave Mission'));
    expect(actions.length).toBe(1);
    await waitFor(() => {
      expect(actions.length).toBe(2);
    });
  });
});
