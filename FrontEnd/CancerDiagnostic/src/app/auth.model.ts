export interface singupModel{
    email: string,
    username: string,
    name: string,
    password: string,
    is_superuser: string,
    nb_alertes: string,
    nb_patients: number
}

export interface AuthResData{
    user_id?: string,
    email: string,
    name?: string,
    username: string,
    token?: string,
    is_superuser: string,
    nb_alertes: string,
    nb_patients: number
}

export interface loginModel{
    email: string,
    password: string,
    is_superuser: string,
    nb_alertes: string,
    nb_patients: number
}

export class User{
    constructor(
        public id: string,
        public email: string,
        public username: string,
        public name: string,
        public token: string,
        public is_superuser: string,
        public nb_alertes: string,
        public nb_patients: number
    ){}
    
}