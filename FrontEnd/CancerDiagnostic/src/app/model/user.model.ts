export interface ITblUser {
    id?: string;
    email?: string;
    username?: string;
    name?: string;
    token?: string;
    is_superuser: string;
    nb_alertes:number;
    nb_patients:number;

}
export class TblUser implements ITblUser {
    constructor(
        public id: string,
        public email: string,
        public username: string,
        public name: string,
        public token: string,
        public is_superuser: string,
        public nb_alertes:number,
        public nb_patients:number

    ){}
} 