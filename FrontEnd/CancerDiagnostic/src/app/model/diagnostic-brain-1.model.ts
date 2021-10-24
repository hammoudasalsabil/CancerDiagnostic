import { ITblSign } from "./sign.model";

export interface ITblDiagBain {
    dDiagnostic?: number;
    Age?: number;
    Vomissement?: string;
    CriseEpilepsie?: string;
    Date?: string;
    Cephalee?:boolean;
    Trouble_Cognitifs?:boolean;
    IdDeficitNeurologique?:number;
    IdPatient?:number;
}
export class TblDiagBain implements ITblDiagBain {
    constructor(
        public dDiagnostic?: number,
        public Age?: number,
        public Vomissement?: string,
        public CriseEpilepsie?: string,
        public Date?: string,
        public Cephalee?:boolean,
        public Trouble_Cognitifs?:boolean,
        public IdDeficitNeurologique?:number,
        public IdPatient?: number,

    ){}
}