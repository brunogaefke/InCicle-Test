import './styles.css';
import { ReactComponent as BigIcon } from 'assets/img/bigPoints.svg';
import { IDataCard } from 'utils/types/IDataCard';
import { useState } from 'react';


export interface DataCardProps {
    boards: IDataCard[];
}

const DataCard = (props: DataCardProps) => {
    const { boards } = props;

    const [show, setShow] = useState<boolean>(true);
    const dismiss = () => {
        if (!window.confirm("Tem certeza que deseja deletar?")) {
            return;
        }
        setShow(false);
    }

    return (show) ? (
        <>
            {
                boards.map((board) => (
                    <div key={board.id} className='data-container'>
                        <div className='image-container'><img className='data-image ' src={board.file?.url} alt={board.title} /></div>
                        <div className='data-info '>
                            <h3>{board.title}</h3>
                            <div className="display-info ">
                                <span>{board.type} </span>
                                {
                                    (board.type === 'event') && (
                                        <p> | {board.info?.place} | </p>
                                    )
                                }
                                <p>{board.info?.date} </p>
                                {
                                    (board.type === 'event') && (
                                        <>
                                            <p>| </p>
                                            <button className='btn btn-confirm'> 2 CONFIRMAÇÕES DE 3 </button>
                                        </>
                                    )
                                }
                            </div>
                            <p>{board.description}</p>
                        </div>
                        <div className='data-icon'>
                            <button className="points-button" onClick={dismiss}><BigIcon /></button>
                        </div>
                    </div>
                ))
            }
        </>
    ) : (<>
    </>);
};

export default DataCard;
