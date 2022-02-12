import './styles.css'

const InvitedCard = () => {
  const equipe = {
    id: 2,
    name: "Kenedy Morais",
    confirmed_presence: true,
    avatar: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/kenedy.jpg",
    username: "kenedymorais"
  }

  return (
    <div className="invited-card">
      <div className='invited-container'><img className='invited-image ' src={equipe.avatar} alt={equipe.username} /></div>
      <p>{`Nome: ${equipe.name}`}</p>
      <p>{`Username: ${equipe.username}`}</p>
      <p>{`Presença confirmada: ${equipe.confirmed_presence}`} </p>
    </div>
  )
}

export default InvitedCard