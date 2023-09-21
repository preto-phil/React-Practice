function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
  const cars = ['BMW', 'Audi', 'Porsche', 'Volvo']
  const carsList = cars.map((car) => <li key={car}>{car}</li>)
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>
        })}
        {carsList}
      </ul>
    </div>
  );
}

export default App
