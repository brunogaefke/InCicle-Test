import ButtonIcon from 'components/ButtonIcon'
import DataCard from 'components/DataCard'
import ManagementCard from 'components/ManagementCard'
import getBoardsFake from 'components/ManagementCard/getBoardsFake'
import ReminderCard from 'components/ReminderCard'
import { useEffect, useState } from 'react'
import { IManagement } from 'utils/types/IManagement'
import './styles.css'

const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [management, setManagement] = useState<IManagement>({ boards: [] });
    const [loadingManagement, setLoadingManagement] = useState<boolean>(true);

    const getManagementData = async (): Promise<void> => {
        setTimeout(async () => {
            await getBoardsFake()
                .then((data): void => {
                    console.log(data);
                    setManagement(data);
                    setLoadingManagement(false);
                })
                .catch((): void => {
                    console.log('erro');
                })
        }, 1000);
    };

    useEffect((): void => {
        getManagementData();
    }, []);

    return (
        <>
            <div className="home-content-container ">
                <div className="first-container">
                    <div className='home-title-container'>
                        <div className='container-title'>
                            <h1>Endomarketing</h1>
                        </div>
                        <div className='container-buttons'>
                            <select className="filter-input" >
                                <option value="">TIPO</option>
                                <option value="Comunicado">Comunicado</option>
                                <option value="Evento">Evento</option>
                                <option value="Publicação">Publicação</option>
                            </select>
                            <ButtonIcon text="CRIAR" />
                        </div>
                    </div>
                    <div className='home-catalog'>
                        <DataCard />
                        <DataCard />
                        <DataCard />
                        <DataCard />
                        <DataCard />
                        <DataCard />
                    </div>
                </div>
                <div className="home-infos-container">
                    <ReminderCard />
                    <div className='home-info-box'>
                        <h6>Quadros de Gestão à Vista</h6>
                        {
                            (loadingManagement) ? <>loader</> : management.boards.map((board): React.ReactNode => (
                                <ManagementCard key={board.id} title={board.title} resume_files={board.resume_files} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home