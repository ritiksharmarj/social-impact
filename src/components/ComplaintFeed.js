import React from 'react';

// import fakeUser from '../json/fake.json';
// import { fetchUser } from '../utils/fetchUser';
import ComplaintCard from './cards/ComplaintCard';

const ComplaintFeed = ({ complaintUserData, setComplaintUserData }) => {
  complaintUserData = complaintUserData.sort(function(a, b){return Date.parse(a.created_at) - Date.parse(b.created_at)})
  return (
    <>
      <div className='mx-auto max-w-3xl'>
        <div className='px-4 sm:px-6 py-6 flex flex-col gap-5'>
          {complaintUserData[0] &&
            complaintUserData[0].map((singleData) => (
              <ComplaintCard key={singleData.user_id} singleData={singleData} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ComplaintFeed;
