    import { ITblPatiens, TblPatiens } from "./patient.model";
    import { ITblSign } from "./sign.model";

    export interface ITblDiagBreast {
        IdDiagnostic?: number;
        Age?: number;
        Maternite?: string;
        Contraception?: string;
        Antecedent_F?: string;
        Antecedent?: string;
        Cycle?: string;
        Date?: string;
        //IdPatient?: ITblPatiens;
        IdPatient?:number;
        IdSing?: ITblSign;

    }
    export class TblDiagBreast implements ITblDiagBreast {
        constructor(
            public IdDiagnostic?: number,
            public Age?: number,
            public Maternite?: string,
            public Contraception?: string,
            public Antecedent_F?: string,
            public Antecedent?: string,
            public Cycle?: string,
            public Date?: string,
            public IdPatient?: number,
            public IdSing?: ITblSign,

        ){}
    }