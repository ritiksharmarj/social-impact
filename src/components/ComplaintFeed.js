import React from 'react';

// import fakeUser from '../json/fake.json';
// import { fetchUser } from '../utils/fetchUser';
import ComplaintCard from './cards/ComplaintCard';

const ComplaintFeed = ({ complaintUserData, setComplaintUserData }) => {
  const fakeData = [
    {
      complaint_id: 1,
      created_at: '2023-03-20 05:26:05.51812+00',
      category: 'environment',
      location: 'VT Road, Mansarovar, Rajasthan, India (302020)',
      description:
        'Our colony is facing irregular water supply which is affecting our day to day life badly. We often have to deal with water shortages and poor water quality, which pose serious threats to our health and well-being. Some of the causes of this problem are droughts and climate change, pollution from sewage and industrial waste, over-abstraction of groundwater, limited infrastructure for water distribution and poverty. These factors have reduced the availability and accessibility of clean and safe water for our colony. We urgently need to find solutions to this crisis before it gets worse.',
      media:
        'https://th.bing.com/th/id/R.85422593b75f20a6a079831ecb0a4181?rik=Q5SOadz4ACJeZQ&riu=http%3a%2f%2fmedia2.intoday.in%2findiatoday%2fimages%2fstories%2fwater-tanker_647_080215032708.jpg&ehk=k8NHv87%2bWPX92z6ijMnhyjrhvRea0TgHZTmLxp2GnVc%3d&risl=&pid=ImgRaw&r=0',
      user_id: 'EkThaCoder',
      profile_image:
        'https://styles.redditmedia.com/t5_2qimj/styles/communityIcon_cxdvjvs58ria1.png',
    },
    {
      complaint_id: 1,
      created_at: '2023-03-20 05:26:05.51812+00',
      category: 'crime',
      location: 'Nirman Nagar, Rajasthan, India (302019)',
      description:
        'I am writing to express my concern and frustration about the problem of chain and phone snatching in my locality. This is a serious issue that affects the safety and security of the residents. Many people have been robbed and injured by these criminals who operate on bikes or scooters. They target women, elderly and children who are walking alone or in crowded places. The police have failed to take any action to prevent or catch these offenders. I urge you to take immediate steps to address this problem and ensure the safety of the public.',
      media:
        'https://th-i.thgim.com/public/migration_catalog/article13287158.ece/alternates/LANDSCAPE_1200/HY28CHAIN_SNATCHING',
      user_id: 'DesiHacker',
      profile_image:
        'https://styles.redditmedia.com/t5_2qimj/styles/communityIcon_cxdvjvs58ria1.png',
    },
    {
      complaint_id: 1,
      created_at: '2023-03-20 05:26:05.51812+00',
      category: 'environment',
      location: 'VT Road, Mansarovar, Rajasthan, India (302020)',
      description:
        'I’m sick of seeing garbage on our roads. It’s not only an eyesore, but also a health hazard and an environmental problem. We need to take responsibility for our waste and dispose of it properly. Let’s keep our city clean and green!',
      media: 'https://static.toiimg.com/photo/msid-86084947/86084947.jpg',
      user_id: 'ThinkCode',
      profile_image:
        'https://styles.redditmedia.com/t5_2qimj/styles/communityIcon_cxdvjvs58ria1.png',
    },
  ];

  // setComplaintUserData(fakeData);

  /*
  // Fetch data from the fake.json
  useEffect(() => {
    //IIFE
    (async () => {
      // const complaintUserData = await fetchUser(fakeUser);
      fetch('../json/fake.json')
        .then((res) => res.json())
        .then((json) => console.log(json));

      console.log(complaintUserData);
      setComplaintUserData(complaintUserData);
    })();
  }, [setComplaintUserData]);
  */

  return (
    <>
      <div className='mx-auto max-w-3xl'>
        <div className='px-4 sm:px-6 py-6 flex flex-col gap-5'>
          {fakeData &&
            fakeData.map((singleData) => (
              <ComplaintCard key={singleData.user_id} singleData={singleData} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ComplaintFeed;
