function Buttons({ color = "blue", fontSize = 16, text = "Click me!", handleClick }) {

  const buttonStyles = {
    color: color,
    fontSize: fontSize + 'px'
  };

  return <button onClick={handleClick} style={buttonStyles}>{text}</button>
}


export default function App() {
  const handleButtonClick = () => {
    window.location.href = "http://www.google.com";
  }
  
  return (
    <div>
      <Buttons handleClick={handleButtonClick}/>
    </div>
  )
}