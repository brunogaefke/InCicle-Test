export interface IManagementFile {
    id: number;
    file: string;
    title: string;
}

export interface IManagementBoard {
    id?: number;
    title?: string;
    resume_files?: IManagementFile[];
}

export interface IManagement {
    boards: IManagementBoard[];
}
