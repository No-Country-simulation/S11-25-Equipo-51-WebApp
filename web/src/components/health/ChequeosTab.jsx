import React, { useState } from 'react';
import RecordCard from '../common/RecordCard';
import { checkupsInitialData } from '../../data/initialData';

const ChequeosTab = () => {
  const [checkups, setCheckups] = useState(checkupsInitialData);

  return (
    <>
      {checkups.map(checkup => (
        <RecordCard key={checkup.id} data={checkup} type="checkup" />
      ))}
    </>
  );
};

export default ChequeosTab;