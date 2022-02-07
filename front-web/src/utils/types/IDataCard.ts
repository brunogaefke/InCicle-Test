export interface IInvitedPeople {
    id?: number,
    name?: string,
    confirmed_presence?: boolean,
    avatar?: string,
    username?: string,
}

export interface IFile {
    url?: string,
}

export interface IInfo {
    date?: string,
    place?: string,
}

export interface IDataCard {
    id?: number,
    title?: string,
    type?: 'event' | 'release' | 'publication',
    description?: string,
    info?: IInfo,
    file?: IFile,
    invited_people?: IInvitedPeople[],

}

