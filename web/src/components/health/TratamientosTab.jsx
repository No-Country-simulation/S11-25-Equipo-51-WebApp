import React, { useState } from 'react';
import RecordCard from '../common/RecordCard';
import { treatmentsInitialData } from '../../data/initialData';

const TratamientosTab = () => {
  const [treatments, setTreatments] = useState(treatmentsInitialData);

  return (
    <>
      {treatments.map(treatment => (
        <RecordCard key={treatment.id} data={treatment} type="treatment" />
      ))}
    </>
  );
};

export default TratamientosTab;