export interface ITblResultBreastOne{
    IdResult?: number;
    IdDiagnostic?: number;
    Resultat?: string;
    Modification?:boolean;
    Echo?:boolean;
    CA15?:boolean;

}
export class TblResultBreastOne implements ITblResultBreastOne {
    constructor(
        public IdResult?: number,
        public IdDiagnostic?: number,
        public Resultat?: string,
        public Modification?: boolean,
        public Echo?: boolean,
        public CA15?: boolean,
    ){}
}