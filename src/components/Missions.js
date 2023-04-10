import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missionsSliceNotImplemented = useSelector((state) => state.missionsSlice === undefined);

  return (
    <div>
      <h1>Missions Page</h1>
      {missionsSliceNotImplemented && <p>The mission slice is not implemented yet.</p>}
      {!missionsSliceNotImplemented && (
        <>
          <p>The mission slice is implemented.</p>
        </>
      )}
    </div>
  );
};

export default Missions;
