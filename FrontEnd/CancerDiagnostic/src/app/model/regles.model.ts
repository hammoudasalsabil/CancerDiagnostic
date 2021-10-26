export interface ITblRegles{
    IdRegle?: number;
    Text?: string;
    Date?: Date;

}
export class TblRegles implements ITblRegles {
    constructor(
        public IdRegle?: number,
        public Text?: string,
        public Date?: Date,
    ){}
}