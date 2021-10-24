export interface ITblDeficitNeurologique{
    IdType?: number;
    Type?: string;

}
export class TblDeficitNeurologique implements ITblDeficitNeurologique {
    constructor(
        public IdType?: number,
        public Type?: string,
    ){}
}