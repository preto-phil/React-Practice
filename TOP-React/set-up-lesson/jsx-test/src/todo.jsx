export default function TodoList() {
  return (
    <div>
      <h1>Hedy Lamarr&lsquo;s Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}