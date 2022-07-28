import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const SecondQuery = () => {
  const fetchData = async () => {
    const { data, status } = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    if (status === 200 && data.status === 'success') {
      return data;
    }
  };

  const { data } = useQuery(['repoData'], async () => {
    return await toast.promise(fetchData(), {
      loading: 'Fetching...',
      success: <b>Image fetched!</b>,
      error: <b>Could not fetch.</b>,
    });
  });

  return (
    <div className="flex justify-center pt-8">
      <img
        src={data?.message}
        alt="Picture of a dog"
        className="w-1/2 rounded-md border-solid border-2 border-sky-500 hover:border-dotted"
      />
    </div>
  );
};

export default SecondQuery;
