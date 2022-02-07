import './styles.css';
import { ReactComponent as BigIcon } from 'assets/img/bigPoints.svg';
import { IDataCard } from 'utils/types/IDataCard';


export interface DataCardProps {
    boards: IDataCard[];
}

const DataCard = (props: DataCardProps) => {
    const { boards } = props;

    return (
        <>
            {
                boards.map((board) => (
                    <div className='data-container'>
                        <div className='image-container' ><img className='data-image ' src={board.file?.url} alt={board.title} /></div>
                        <div className='data-info '>
                            <h3>{board.title}</h3>
                            <div className="display-info ">
                                <span>{board.type} </span>
                                {
                                    (board.type === 'event') && (
                                        <p> | {board.info?.place} | </p>
                                    )
                                }
                                <p>{board.info?.date}</p>
                                {
                                    (board.type === 'event') && (
                                        <p> | 3 CONFIRMAÇÕES DE 15</p>
                                    )
                                }
                            </div>
                            <p>{board.description}</p>
                        </div>
                        <div className='data-icon'>
                            <button className="points-button"><BigIcon /></button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default DataCard;
