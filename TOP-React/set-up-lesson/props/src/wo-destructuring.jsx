function Buttons(props) {

  const buttonStyles = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return <button style={buttonStyles}>{props.text}</button>
}

export default function App() {
  return (
    <div>
      <Buttons text={'Click me!'} color={'blue'} fontSize={16}/>
      <Buttons text={"Don't click me!"} color={'red'} fontSize={16}/>
      <Buttons text={'Click me!'} color={'blue'} fontSize={16}/>
    </div>
  )
}