import "./styles.css"
import { ReactComponent as GLobeIcon } from 'assets/img/globe.svg';
import { ReactComponent as PointsIcon } from 'assets/img/points.svg';
import { IManagementBoard, IManagementFile } from "utils/types/IManagement";
import { useState } from "react";
import Modal from 'react-modal'

export interface ManagementCardProps {
  board: IManagementBoard;
}

const ManagementCard = (props: ManagementCardProps) => {
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

  const { board } = props;

  const [show, setShow] = useState<boolean>(true);

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

  return (show) ? (
    <>
      <div className="container-card">
        <div className="title-card">
          <h3>{board.title}</h3>
          <div className="icons-card">
            <GLobeIcon />
            <button className="points-button" onClick={openModal}><PointsIcon /></button>
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
        <div className="image-content">
          {
            (board.resume_files as IManagementFile[]).map((file): React.ReactNode => (
              <img className='data-image' key={file.id} src={file.file} alt={file.title} />
            ))
          }
        </div>
      </div>
    </>
  ) : (<></>)
};

export default ManagementCard;