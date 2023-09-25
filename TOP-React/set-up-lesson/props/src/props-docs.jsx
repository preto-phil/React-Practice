import { getImageUrl } from "./util";

function Avatar({ person, size = 100 }) {
  return (
    <img 
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name} 
      width={size}
      height={size}
    />

  )
}

export default function Profile() {
  return (
    <div>
      <Avatar 
        size={100}
        person={{
          name: 'Bob',
          imageId: 'b123'
        }}
      />
      <Avatar 
        size={120}
        person={{
          name: 'Pat',
          imageId: 'p123'
        }}        
      />
      <Avatar 
        size={110}
        person={{
          name: 'Sam',
          imageId: 's123'
        }}      
      />
    </div>
  )
}