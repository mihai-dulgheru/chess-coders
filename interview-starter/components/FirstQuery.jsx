import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const FirstQuery = () => {
  const [state, setState] = useState({
    url: '',
  });

  const fetchData = async () => {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    if (response.data.status === 'success') {
      setState({ ...state, url: response.data.message });
    }
  };

  useEffect(() => {
    toast.promise(fetchData(), {
      loading: 'Fetching...',
      success: <b>Image fetched!</b>,
      error: <b>Could not fetch.</b>,
    });
  }, []);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-center pt-8">
        {state.url && (
          <img
            src={state.url}
            alt="Picture of a dog"
            className="w-1/2 rounded-md border-solid border-2 border-sky-500 hover:border-dotted"
          />
        )}
      </div>
    </div>
  );
};

export default FirstQuery;
