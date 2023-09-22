function Buttons({ color = "blue", fontSize = 16, text = "Click me!" }) {

  const buttonStyles = {
    color: color,
    fontSize: fontSize + 'px'
  };

  return <button style={buttonStyles}>{text}</button>
}

/* Example */
Buttons.defaultProps = {
  text: "Click me!",
  color: "blue",
  fontSize: 16
}

export default function App() {
  return (
    <div>
      <Buttons />
      <Buttons text={"Don't click me!"} color={'red'} fontSize={16}/>
      <Buttons text={'Click me!'} color={'blue'} fontSize={18}/>
    </div>
  )
}