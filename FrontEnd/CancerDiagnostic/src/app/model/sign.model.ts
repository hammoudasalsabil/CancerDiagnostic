export interface ITblSign{
    IdSign?: number;
    Sign?: string;

}
export class TblSign implements ITblSign {
    constructor(
        public IdSign?: number,
        public Sign?: string,
    ){}
}