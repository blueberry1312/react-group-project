import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Mission Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
