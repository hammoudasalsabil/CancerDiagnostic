export interface ITblUser {
    id?: string;
    email?: string;
    username?: string;
    name?: string;
    token?: string;
    is_superuser: string;
    nbrpatient:number;
   
}
export class TblUser implements ITblUser {
    constructor(
        public id: string,
        public email: string,
        public username: string,
        public name: string,
        public token: string,
        public is_superuser: string,
        public nbrpatient:number

    ){}
}