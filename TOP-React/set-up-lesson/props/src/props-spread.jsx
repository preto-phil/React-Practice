import Avatar from "./avatar";

/* Instead of this */

export function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

/* Use this */

export function Profile2(props) {
  return (
    <div className="card">
      <Avatar
        {...props}
      />
    </div>
  );  
}
