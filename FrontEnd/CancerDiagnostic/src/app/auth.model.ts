export interface singupModel{
    email: string,
    username: string,
    name: string,
    password: string,
    is_superuser: string
}

export interface AuthResData{
    user_id?: string,
    email: string,
    name?: string,
    username: string,
    token?: string,
    is_superuser: string
}

export interface loginModel{
    email: string,
    password: string,
    is_superuser: string
}

export class User{
    constructor(
        public id: string,
        public email: string,
        public username: string,
        public name: string,
        public token: string,
        public is_superuser: string
    ){}
    
}