import React, { Fragment, useState, useEffect } from 'react';
const fakeFetch = person => {
  return new Promise(res => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
  });
};
const RaceConditionWithFetchResolved = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  useEffect(() => {
    let cancel = false;
    setLoading(true);
    fakeFetch(person).then(data => {
        if (!cancel) {
        setData(data);
        setLoading(false);
        }
    });
    return () => cancel = true;
  }, [person]);
  return (
    <Fragment>
      <button onClick={() => setPerson('Nick')}>Nick's Profile</button>
      <button onClick={() => setPerson('Deb')}>Deb's Profile</button>
      <button onClick={() => setPerson('Joe')}>Joe's Profile</button>
      {person && (
        <Fragment>
          <h1>{person}</h1>
          <p>{loading ? 'Loading...' : data}</p>
        </Fragment>
      )}
    </Fragment>
  );
};
export default RaceConditionWithFetchResolved;
