import React, { useState } from 'react';
import { IDataCard } from '../../utils/types/IDataCard';
import { ReactComponent as BigIcon } from 'assets/img/bigPoints.svg';
import './styles.css';
import Modal from 'react-modal'
import InvitedCard from 'components/InvitedCard';

interface DataCardProps {
  card: IDataCard;
}

const DataCard = (props: DataCardProps): JSX.Element => {
  const { card } = props;

  const [show, setShow] = useState<boolean>(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '300px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
    },
  };

  const [InvitedModalIsOpen, setInvitedModalIsOpen] = useState<boolean>(false);

  function openInvitedModal() {
    setInvitedModalIsOpen(true);
  }
  function closeInvitedModal() {
    setInvitedModalIsOpen(false);
  }

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const dismiss = () => {
    setShow(false);
    closeModal();
  }

  return (
    <div key={card.id} className='data-container' style={{ display: (show) ? 'auto' : 'none' }}>
      <div className='image-container'><img className='data-image ' src={card.file?.url} alt={card.title} /></div>
      <div className='data-info '>
        <h3>{card.title}</h3>
        <div className="display-info ">
          <span>{card.type} </span>
          {
            (card.type === 'event') && (
              <p> | {card.info?.place} | </p>
            )
          }
          <p>{card.info?.date} </p>
          {
            (card.type === 'event') && (
              <>
                <p>| </p>
                <button className='btn btn-confirm' onClick={openInvitedModal}> 2 CONFIRMAÇÕES DE 3 </button>
                <Modal
                  isOpen={InvitedModalIsOpen}
                  onRequestClose={closeInvitedModal}
                  style={customStyles}
                  contentLabel="Invited-Modal"
                >
                  <div className="invited-modal">
                    <h6>INTROPPERS CONVIDADOS:</h6>
                    <InvitedCard />
                    <button className="btn modal-button" onClick={closeInvitedModal}>SAIR</button>
                  </div>
                </Modal>
              </>
            )
          }
        </div>
        <p>{card.description}</p>
      </div>
      <div className='data-icon'>
        <button className="points-button" onClick={openModal}><BigIcon /></button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Confirm-Modal"
        >
          <p>Deseja excluir o item?</p>
          <button className="btn modal-button" onClick={dismiss}>OK</button>
          <button className="btn modal-button" onClick={closeModal}>Cancelar</button>
        </Modal>
      </div>
    </div>
  );
};

export default DataCard;