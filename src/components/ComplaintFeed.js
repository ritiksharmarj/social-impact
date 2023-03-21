import React from 'react';

// import fakeUser from '../json/fake.json';
// import { fetchUser } from '../utils/fetchUser';
import ComplaintCard from './cards/ComplaintCard';

const ComplaintFeed = ({ complaintUserData, setComplaintUserData }) => {
  // setComplaintUserData(sort_by_date(complaintUserData));

  sort_by_date(complaintUserData);
  console.log(sort_by_date(complaintUserData));

  function sort_by_date(array) {
    // Copy the array to avoid mutating the original
    let sorted = [...array];
    // Use the built-in sort method with a custom comparator function
    sorted.sort((a, b) => {
      // Compare the create_at properties of two objects
      return b.complaint_id - a.complaint_id;
    });
    // Return the sorted array
    return sorted;
  }

  return (
    <>
      <div className='mx-auto max-w-3xl'>
        <div className='px-4 sm:px-6 py-6 flex flex-col gap-5'>
          {complaintUserData[0] &&
            complaintUserData[0].map((singleData) => (
              <ComplaintCard
                key={singleData.complaint_id}
                singleData={singleData}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ComplaintFeed;
