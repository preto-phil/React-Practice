import { people2 } from "./data";
import { getImageUrl } from "./util";

export default function List() {
  const chemists =  people2.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
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
  return <ul>{listItems}</ul>;
}