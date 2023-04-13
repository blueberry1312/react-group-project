import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector(
    (state) => state.missions.missions.filter((mission) => mission.reserved),
  );

  return (
    <div className="MyProfile">
      <div className="missions-list">
        <h2 className="h2-myprofile">My Missions</h2>
        <table className="table-missions">
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="td-missions">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rockets-list">
        <h2 className="h2-myprofile">My Rockets</h2>
        <table className="table-rockets">
          <tbody>
            {rockets.map((rocket) => (
              <tr key={rocket.id}>
                <td className="td-rockets">{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
