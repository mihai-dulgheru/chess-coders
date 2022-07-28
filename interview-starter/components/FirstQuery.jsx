import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const FirstQuery = () => {
  const [state, setState] = useState({
    url: '',
  });

  const fetchData = async () => {
    const { data, status } = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    if (status === 200 && data.status === 'success') {
      setState({ ...state, url: data.message });
    }
  };

  const effect = async () => {
    await toast.promise(fetchData(), {
      loading: 'Fetching...',
      success: <b>Image fetched!</b>,
      error: <b>Could not fetch.</b>,
    });
  };

  useEffect(effect, []);

  return (
    <div className="flex flex-col justify-center items-center pt-8 gap-4">
      {state.url && (
        <img
          src={state.url}
          alt="Picture of a dog"
          className="w-1/2 rounded-md border-solid border-2 border-sky-500 hover:border-dotted"
        />
      )}
      <button
        onClick={effect}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Get Image
      </button>
    </div>
  );
};

export default FirstQuery;
