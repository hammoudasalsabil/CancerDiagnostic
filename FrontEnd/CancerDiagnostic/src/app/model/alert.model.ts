
export interface ITblAlerts {
    IdAlerte?: number;
    Text?: string;
    Date?: string;
   
}
export class TblAlerts implements ITblAlerts {
    constructor(
        public IdAlerte?: number,
        public Text?: string,
        public Date?: string,

    ){}
}