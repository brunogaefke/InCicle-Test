import ButtonIcon from 'components/ButtonIcon'
import ManagementCard from 'components/ManagementCard'
import getBoardsFake from 'pages/Home/getBoardsFake'
import ReminderCard from 'components/ReminderCard'
import { useEffect, useState } from 'react'
import { IManagement } from 'utils/types/IManagement'
import './styles.css'
import { IDataCard } from 'utils/types/IDataCard'
import getCardsFake from './getCardsFake'
import Loader from './Loader'
import { allCards, cardsEvent, cardsPublication, cardsRelease } from './CardsFake'
import DataCard from 'components/DataCard'


const Home = () => {
  const [management, setManagement] = useState<IManagement>({ boards: [] });
  const [loadingManagement, setLoadingManagement] = useState<boolean>(true);

  const [cards, setCards] = useState<IDataCard[]>(allCards);
  const [loadingCards, setloadingCards] = useState<boolean>(true);

  const getManagementData = async (): Promise<void> => {
    setTimeout(async () => {
      await getBoardsFake()
        .then((data): void => {
          setManagement(data);
          setLoadingManagement(false);
        })
        .catch((): void => {
          console.log('error');
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
          console.log('error');
        })
    }, 1000);
  };

  const changeCards = (type: number): void => {
    switch (type) {
      case 1: {
        setCards(cardsPublication);
        break;
      }
      case 2: {
        setCards(cardsEvent);
        break;
      }
      case 3: {
        setCards(cardsRelease);
        break;
      }
      default: {
        setCards(allCards);
        break;
      }
    }
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
              <select className="filter-input"
                onChange={(evt: React.ChangeEvent<HTMLSelectElement>): void => { changeCards(parseInt(evt.target.value, 10)); }} >
                <option value={0}>TIPO</option>
                <option value={1}>Comunicado</option>
                <option value={2}>Evento</option>
                <option value={3}>Publicação</option>
              </select>
              <ButtonIcon text="CRIAR" />
            </div>
          </div>
          <div className='home-catalog'>
            {
              (loadingCards) ? <Loader /> : (
                <>
                  {
                    cards.map((card, index): JSX.Element => (
                      <DataCard key={index.toString()} card={card} />
                    ))
                  }
                </>
              )
            }
          </div>
        </div>
        <div className="home-infos-container">
          <ReminderCard />
          <div className='home-info-box'>
            <h6>Quadros de Gestão à Vista</h6>
            {
              (loadingManagement) ? <><Loader /></> : management.boards.map((board): React.ReactNode => (
                <ManagementCard key={board.id} board={board} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home