import './App.css'

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com';

  return (
    <>
    <div className="App">
      <h1>{ title }</h1>
      <p>Liked { likes } times</p>
      <p>{ 10 }</p>
      <p>{ "Hello Ninjas" }</p>
      <p>{ Math.random() * 10 }</p>

      <a href={link} target="_blank" rel='noreferrer'>Google Site</a>
    </div>
    </>
  )
}

export default App
