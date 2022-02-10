import { IDataCard } from 'utils/types/IDataCard';

const cardsPublication: IDataCard[] = [
  {
    id: 1,
    title: "Você sabe o que é endomarketing?",
    type: "publication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    info: {
      date: "15 OUT"
    },
    file: {
      url: "https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/6.jpg"
    }
  },
  {
    id: 2,
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
];

const cardsEvent: IDataCard[] = [
  {
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
    ],
  },
  {
    id: 2,
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
  },
];

const cardsRelease: IDataCard[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
];

const allCards: IDataCard[] = [];

allCards.push(
  cardsPublication[0],
  cardsPublication[1],
  cardsEvent[0],
  cardsEvent[1],
  cardsRelease[0],
  cardsRelease[1]
);

export {
  cardsPublication, cardsEvent, cardsRelease, allCards,
};
