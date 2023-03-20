import React, { useState, useContext } from 'react';
import { SupaContext } from "../SupaContext";

import ComplaintFeed from '../components/ComplaintFeed';

const Home = () => {
  const [complaintUserData, setComplaintUserData] = useState([]);

  const {complaintDetails} = useContext(SupaContext);
  // setComplaintUserData(complaintDetails);

  return (
    <ComplaintFeed
      complaintUserData={complaintDetails}
      setComplaintUserData={setComplaintUserData}
    />
  );
};

export default Home;
