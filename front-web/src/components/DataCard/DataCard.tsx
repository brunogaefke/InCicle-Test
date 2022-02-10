import React, { useState } from 'react';
import { IDataCard } from '../../utils/types/IDataCard';
import { ReactComponent as BigIcon } from 'assets/img/bigPoints.svg';
import './styles.css';

interface DataCardProps {
  card: IDataCard;
}

const DataCard = (props: DataCardProps): JSX.Element => {
  const { card } = props;

  const [show, setShow] = useState<boolean>(true);

  const dismiss = () => {
    const deleteCard = !window.confirm('Tem certeza que deseja deletar?');

    setShow((deleteCard) && false);
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
                <button className='btn btn-confirm'> 2 CONFIRMAÇÕES DE 3 </button>
              </>
            )
          }
        </div>
        <p>{card.description}</p>
      </div>
      <div className='data-icon'>
        <button className="points-button" onClick={dismiss}><BigIcon /></button>
      </div>
    </div>
  );
};

export default DataCard;