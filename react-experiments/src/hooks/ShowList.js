import React, {
  useState,
  useEffect,
} from "react";

export default function ShowList() {
  const [people, setPeople] = useState([]);

  async function fetchPeople() {
    let response = await fetch("https://swapi.co/api/people/");
    let responseInJson = await response.json();
    setPeople(responseInJson.results);
  }

  useEffect(() => {
    fetchPeople();

    return () => {
      console.log("cleanUP fetching");
    };
  }, []);

  function renderPeopleList() {
    return (
      <ol>
        {people && people.map(person => (
          <li key={person.created}>{person.name}</li>
        ))}
      </ol>
    );
  }

  return <div>{renderPeopleList()}</div>;
}
