import React, { useEffect } from 'react';

import fakeUser from '../json/fake.json';
import { fetchUser } from '../utils/fetchUser';
import ComplaintCard from './cards/ComplaintCard';

const ComplaintFeed = ({ complaintUserData, setComplaintUserData }) => {
  // Fetch data from the fake.json
  useEffect(() => {
    //IIFE
    (async () => {
      const complaintUserData = await fetchUser(fakeUser);

      setComplaintUserData(complaintUserData);
    })();
  }, [setComplaintUserData]);

  return (
    <>{complaintUserData && complaintUserData.map(() => <ComplaintCard />)}</>
  );
};

export default ComplaintFeed;
