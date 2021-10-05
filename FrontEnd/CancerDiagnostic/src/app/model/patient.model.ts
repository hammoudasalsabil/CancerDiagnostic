import { User } from "../auth.model";

export interface ITblPatiens {
    IdPatient?: number;
    Name?: string;
    LastName?: string;
    Phone?: string;
    Town?: string;
    User_id?: User;
   
}
export class TblPatiens implements ITblPatiens {
    constructor(
        public IdPatient?: number,
        public Name?: string,
        public LastName?: string,
        public Phone?: string,
        public Town?: string,
        public User_id?: User,

    ){}
}