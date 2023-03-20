import React, { useState, useContext } from 'react';
import { SupaContext } from "../SupaContext";

import ComplaintFeed from '../components/ComplaintFeed';

const Home = () => {
  const [complaintUserData, setComplaintUserData] = useState([]);

  const {complaintDetails} = useContext(SupaContext);

  //For testing purpose, will be removed when authentication applied
  localStorage.setItem('loggedIn_user_id', "ritik_sharma");

  return (
    <ComplaintFeed
      complaintUserData={complaintDetails}
      setComplaintUserData={setComplaintUserData}
    />
  );
};

export default Home;
