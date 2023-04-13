import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsSlice';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

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
        {missions.map((mission) => {
          const isMember = mission.reserved;
          const handleButtonClick = isMember
            ? handleLeaveMission
            : handleJoinMission;
          const buttonDisabled = isMember ? false : mission.reserved;

          return (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="status">
                <div className={isMember ? 'member' : 'not-member'}>
                  {isMember ? 'Active Member' : 'NOT A MEMBER'}
                </div>
              </td>
              <td>
                <button
                  type="button"
                  className={isMember ? 'leave-button' : 'join-button'}
                  onClick={() => handleButtonClick(mission.mission_id)}
                  disabled={buttonDisabled}
                >
                  {isMember ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Missions;
