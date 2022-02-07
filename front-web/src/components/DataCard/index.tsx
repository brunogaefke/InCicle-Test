import './styles.css';
import { ReactComponent as BigIcon } from 'assets/img/bigPoints.svg';

const DataCard = () => {

    const data = {
        "id": 1,
        "title": "Apoiar a atlética dos integrantes do nosso time",
        "type": "event",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        "info": {
            "date": "13 OUT",
            "place": "UFAC"
        },
        "file": {
            "url": "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/1.jpg"
        },
        "invited_people": [
            {
                "id": 1,
                "name": "Kenedy Morais",
                "confirmed_presence": true,
                "avatar": "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/kenedy.jpg",
                "username": "kenedymorais"
            }

        ]

    }

    return (
        <div className='data-container'>
            <div className='image-container' ><img className='data-image ' src={data.file.url} alt={data.title} /></div>
            <div className='data-info '>
                <h3>{data.title}</h3>
                <div className="display-info ">
                    <span>{data.type} </span>
                    <p> | {data.info.place} | </p>
                    <p>{data.info.date}</p>
                </div>
                <p>{data.description}</p>
            </div>
            <div className='data-icon'>
                <button className="points-button"><BigIcon /></button>
            </div>
        </div>
    );
};

export default DataCard;
