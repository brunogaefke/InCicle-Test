import { IInvitedPeople } from 'utils/types/IDataCard'
import './styles.css'

export interface ModalProps {
  invited: IInvitedPeople[];
}

const InvitedCard = (props: ModalProps): JSX.Element => {
  const { invited } = props;

  return (
    <div>
      {
        (invited.map((person): React.ReactNode => (
          <div key={person.id} className="invited-card">
            <div className='invited-container'><img className='invited-image ' src={person.avatar} alt={person.name} /></div>
            <p>{`Nome: ${person.name}`}</p>
            <p>{`Username: ${person.username}`}</p>
            <p>{`Confirmou presença? ${(person.confirmed_presence) ? 'Sim' : 'Não'}`}</p>
          </div>
        )))}
    </div>
  )
};

export default InvitedCard