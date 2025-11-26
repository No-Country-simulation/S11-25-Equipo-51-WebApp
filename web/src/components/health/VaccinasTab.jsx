import React, { useState } from 'react';
import RecordCard from '../common/RecordCard';
import { vaccinesInitialData } from '../../../data/initialData';

const VaccinasTab = () => {
  const [vaccines, setVaccines] = useState(vaccinesInitialData);

  return (
    <>
      {vaccines.map(vaccine => (
        <RecordCard key={vaccine.id} data={vaccine} type="vaccine" />
      ))}
    </>
  );
};

export default VaccinasTab;
