import "./styles.css"
import { ReactComponent as GLobeIcon } from 'assets/img/globe.svg';
import { ReactComponent as PointsIcon } from 'assets/img/points.svg';
import { IManagementBoard, IManagementFile } from "utils/types/IManagement";
import { useState } from "react";

export interface ManagementCardProps {
    board: IManagementBoard;
}

const ManagementCard = (props: IManagementBoard) => {
    const { title, resume_files } = props;

    const [show, setShow] = useState<boolean>(true);
    const dismiss = () => {
        setShow(false);
    }

    return (show) ? (
        <div className="container-card">
            <div className="title-card">
                <h3>{title}</h3>
                <div className="icons-card">
                    <GLobeIcon />
                    <button className="points-button" onClick={dismiss}><PointsIcon /></button>
                </div>
            </div>
            <div className="image-content">
                {
                    (resume_files as IManagementFile[]).map((file): React.ReactNode => (
                        <img className='data-image' key={file.id} src={file.file} alt={file.title} />
                    ))
                }
            </div>
        </div>
    ) : (<></>);
};

export default ManagementCard;