import Card1 from '@/components/card/Card1';
import Layout from '@/components/Layout/Layout';
import React, { useEffect, useState } from 'react';

export default function Test() {
  const [loading, setLoading] = useState(true);
  const [pokedata, setPokeData] = useState([]);

  useEffect(() => {
    fetch('/api/test/getPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pokeName: 'clarify' }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokeData(data);
        setLoading((prev) => false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="absolute top-32 right-0 left-0 bottom-0 flex justify-center items-center">
          <progress className="progress w-56 absolute"></progress>
        </div>
      ) : (
        [
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
          pokedata,
        ].map((x, i) => {
          return (
            <Card1
              key={i}
              title={'Clafairy'}
              image={x.body}
              buttonText="Enter Room"
            ></Card1>
          );
        })
      )}
    </Layout>
  );
}
