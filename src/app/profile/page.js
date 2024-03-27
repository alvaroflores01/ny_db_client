'use client';

import axios from '../util/axios.js';
import React, { useState, useEffect } from 'react';

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/testTable');
        // Assuming you have an API route set up
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Example</h1>
      {data ? (
        <ul>
          <h1>Results:</h1>
          {data.map((item) => (
            <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>
          ))}{' '}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
