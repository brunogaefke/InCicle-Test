import { IManagement, IManagementBoard } from "utils/types/IManagement";

const getBoardsFake = async (): Promise<IManagement> => {
    const management: IManagement = {
        boards: [],
    };

    const comercial: IManagementBoard = {
        id: 1,
        title: 'Demonstrativo comercial',
        resume_files: [
            {
                id: 1,
                title: 'img1',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg',
            },
            {
                id: 2,
                title: 'img2',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/8.jpg',
            },
            {
                id: 3,
                title: 'img3',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/9.jpg',
            },
            {
                id: 4,
                title: 'img4',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/10.jpg',
            },
        ],
    };

    management.boards.push(comercial);

    const desempenho: IManagementBoard = {
        id: 2,
        title: 'Resultado de desempenho',
        resume_files: [
            {
                id: 1,
                title: 'img1',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg',
            },
            {
                id: 2,
                title: 'img2',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/8.jpg',
            },
            {
                id: 3,
                title: 'img3',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/9.jpg',
            },
            {
                id: 4,
                title: 'img4',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/10.jpg',
            },
        ],
    };

    management.boards.push(desempenho);

    const comparativo: IManagementBoard = {
        id: 3,
        title: 'Comparativo periódico',
        resume_files: [
            {
                id: 1,
                title: 'img1',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg',
            },
            {
                id: 2,
                title: 'img2',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/8.jpg',
            },
            {
                id: 3,
                title: 'img3',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/9.jpg',
            },
            {
                id: 4,
                title: 'img4',
                file: 'https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/10.jpg',
            },
        ],
    };

    management.boards.push(comparativo);



    return management;
};

export default getBoardsFake;
