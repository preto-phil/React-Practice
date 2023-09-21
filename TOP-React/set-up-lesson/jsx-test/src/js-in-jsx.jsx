const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-UK',
    { weekday: 'long' }
  ).format(date);
}

export default function Avatar() {
  const avatar = "preto-phil";
  const description = "not tall, but dark and handsome";
  return (
    <div>
      <h1 style={{ 
        color: "blue",
        backgroundColor: "purple"
      }}>Avatar 1</h1>
      <p>Name: {avatar}</p>
      <p>Description: {description}</p>
      <p>Date: {formatDate(today)}</p>
    </div>
  );
}