import React, { useState, useEffect } from "react";
// typein id in input box
// click on show person
// fetch and show that person
// by default show person with id 1

export default function ShowPerson() {
  const [personId, setPersonId] = useState("1");
  const [personDetails, setPersonDetails] = useState({});
  const [personSearchQuery, setPersonSearchQuery] = useState("");

  async function fetchPersonDetails(personId) {
    let response = await fetch(`https://swapi.co/api/people/${personId}/`);
    let responseInJson = await response.json();
    setPersonDetails(responseInJson);
  }

  /** fetch person details when person id changes */
  /*
  useEffect(() => {
    personId !== "" && fetchPersonDetails(personId);
  }, [personId]);
  */

  /** fetch person details when button click */
  useEffect(() => {
    personSearchQuery !== "" && fetchPersonDetails(personSearchQuery);
  }, [personSearchQuery]);

  function renderPersonDetails() {
    return (
      <ul>
        <li>{personDetails.name}</li>
        <li>{personDetails.gender}</li>
        <li>{personDetails.mass}</li>
      </ul>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={personId}
        onChange={event => setPersonId(event.target.value)}
      />
      {/* <button onClick={() => fetchPersonDetails(personId)}>show</button> option 1*/}

      <button onClick={() => setPersonSearchQuery(personId)}>show</button> 
      {/** option 2, which is better option 1 or option 2 ?? i think option 1 is better as it allows me to reduce state duplication, personSearchQuery can be removed */}


      {personDetails.name && renderPersonDetails()}
    </div>
  );
}
