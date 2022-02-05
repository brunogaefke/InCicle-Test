import "./styles.css"
import { ReactComponent as GLobeIcon } from 'assets/img/globe.svg';
import { ReactComponent as PointsIcon } from 'assets/img/points.svg';


const ManagementCard = () => {
    const managment = {
        "title": "Demonstrativo comercial",
        "resume_files":
        {
            "file": "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg"
        },
    }
    return (
        <div className="container-card">
            <div className="title-card">
                <h3>{managment.title}</h3>
                <div className="icons-card">
                    <GLobeIcon />
                    <PointsIcon />
                </div>
            </div>
            <div className="image-content">
                <img className='data-image' src={managment.resume_files.file} alt={managment.title} />
                <img className='data-image' src={managment.resume_files.file} alt={managment.title} />
                <img className='data-image' src={managment.resume_files.file} alt={managment.title} />
                <img className='data-image' src={managment.resume_files.file} alt={managment.title} />
            </div>
        </div>


    );
};

export default ManagementCard;