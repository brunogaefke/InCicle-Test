import ButtonIcon from 'components/ButtonIcon'
import DataCard from 'components/DataCard'
import ManagementCard from 'components/ManagementCard'
import getBoardsFake from 'pages/Home/getBoardsFake'
import ReminderCard from 'components/ReminderCard'
import { useEffect, useState } from 'react'
import { IManagement } from 'utils/types/IManagement'
import './styles.css'
import { IDataCard } from 'utils/types/IDataCard'
import getCardsFake from './getCardsFake'

const Home = () => {
    const [management, setManagement] = useState<IManagement>({ boards: [] });
    const [loadingManagement, setLoadingManagement] = useState<boolean>(true);

    const [cards, setCards] = useState<IDataCard[]>([]);
    const [loadingCards, setloadingCards] = useState<boolean>(true);

    const getManagementData = async (): Promise<void> => {
        setTimeout(async () => {
            await getBoardsFake()
                .then((data): void => {
                    setManagement(data);
                    setLoadingManagement(false);
                })
                .catch((): void => {
                    console.log('erro');
                })
        }, 1000);
    };

    const getCardsData = async (): Promise<void> => {
        setTimeout(async () => {
            await getCardsFake()
                .then((data): void => {
                    setCards(data);
                    setloadingCards(false);
                })
                .catch((): void => {
                    console.log('erro');
                })
        }, 1000);
    };

    useEffect((): void => {
        getCardsData();
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
                        {
                            (loadingCards) ? <>loader</> : (<DataCard boards={cards} />)
                        }
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