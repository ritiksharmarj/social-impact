import React, { useState } from 'react';

import ComplaintFeed from '../components/ComplaintFeed';

const Home = () => {
  const [complaintUserData, setComplaintUserData] = useState([]);

  return (
    <ComplaintFeed
      complaintUserData={complaintUserData}
      setComplaintUserData={setComplaintUserData}
    />
  );
};

export default Home;
