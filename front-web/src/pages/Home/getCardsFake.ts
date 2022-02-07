import { IDataCard } from "utils/types/IDataCard";

const getCardsFake = async (): Promise<IDataCard[]> => {
    const cards: IDataCard[] = [];

    const card1: IDataCard = {
        id: 1,
        title: 'Apoiar a atlética dos integrantes do nosso time',
        type: 'event',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
        info: {
            date: '13 OUT',
            place: 'UFAC',
        },
        file: {
            url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/1.jpg",
        },
        invited_people: [
            {
                id: 1,
                name: "Kenedy Morais",
                confirmed_presence: true,
                avatar: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/kenedy.jpg",
                username: "kenedymorais"
            },
            {
                id: 2,
                name: "Jardeson Eduardo",
                confirmed_presence: false,
                avatar: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/jardesson.jpg",
                username: "kenedymorais"
            },
            {
                id: 3,
                name: "Patricia Santos",
                confirmed_presence: true,
                avatar: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/patricia.jpg",
                username: "kenedymorais"
            }
        ]

    };

    cards.push(card1);

    const card2: IDataCard = {
        id: 2,
        title: "Dia do Introoper",
        type: "release",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        info: {
            date: "15 OUT",
            place: "Sede InCicle"
        },
        file: {
            url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/2.jpg"
        }
    }

    cards.push(card2);

    const card3: IDataCard = {
        id: 3,
        title: "Você sabe o que é endomarketing?",
        type: "publication",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        info: {
            date: "15 OUT"
        },
        file: {
            url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/3.jpg"
        }
    }

    cards.push(card3);

    const card4: IDataCard = {
        id: 4,
        title: "Apresentação do projeto para novos colaboradores",
        type: "event",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        info: {
            date: "13 OUT",
            place: "Google Meet"
        },
        file: {
            url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/4.jpg"
        },
        invited_people: [
            {
                id: 2,
                name: "Patricia Santos",
                confirmed_presence: true,
                avatar: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/patricia.jpg",
                username: "kenedymorais"
            }
        ]
    }

    cards.push(card4);

    const card5: IDataCard = {
        id: 5,
        title: "Dia do Introoper",
        type: "release",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        info: {
            date: "15 OUT",
            place: "Sede InCicle"
        },
        file: {
            url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/5.jpg"
        }
    }

    cards.push(card5);

    const card6: IDataCard = {
        id: 6,
        title: "Você sabe o que é endomarketing?",
        type: "publication",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        info: {
            date: "15 OUT"
        },
        file: {
            url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/6.jpg"
        }
    }

    cards.push(card6);

    return cards;
};

export default getCardsFake;
