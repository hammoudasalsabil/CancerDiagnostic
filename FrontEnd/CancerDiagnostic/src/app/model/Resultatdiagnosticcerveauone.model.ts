export interface ITblResultatdiagnosticcerveauone{
    IdResult?: number;
    IdDiagnostic?: number;
    Resultat?: string;
    Modification?: boolean;
    IRM?: boolean;

}
export class TblResultatdiagnosticcerveauone implements ITblResultatdiagnosticcerveauone {
    constructor(
        public IdResult?: number,
        public IdDiagnostic?: number,
        public Resultat?: string,
        public Modification?: boolean,
        public IRM?: boolean,
    ){}
}