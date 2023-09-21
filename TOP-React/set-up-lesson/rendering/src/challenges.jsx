import { people2 } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people2.filter(person => 
    person.profession === 'chemist'
  );
  const chemistListItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const nonChemists = people2.filter(person => 
    person.profession !== 'chemist'
  );
  const everyoneElse = nonChemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{chemistListItems}</ul>
      <ul>{everyoneElse}</ul>
    </article>
  );
}