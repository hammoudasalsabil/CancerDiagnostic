import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  APIUrl = "http://127.0.0.1:8000/";
  PhotoUrl = "http://127.0.0.1:8000/media/";

  httpHeadrs = new HttpHeaders ({
    'Content-Type':  'application/json',
    'Authorization': 'mon-jeton'
  });


  constructor(private http: HttpClient) { }
//Get
  getAccuiell(){
    return this.http.get(this.APIUrl);
  }

  getProfile(){
    return this.http.get(this.APIUrl+ 'accounts/profile/');
  }

  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'core/Users/',
    {headers : this.httpHeadrs});
  }

  getAlert():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Alertes/');
  }

  getPatientsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Patient/');
  }
  getSigne():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Sign/');
  }

  getDiagnosticBreastOne():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Diagnostic_Breast_1/');
  }
  getDiagnosticBreastTwo():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Diagnostic_Breast_2/');
  }
  getDiagnosticBrainOne():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Diagnostic_Brain_1/');
  }
  getDiagnosticBrainTow():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Diagnostic_Brain_2/');
  }
  getResultBrainOne():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Result_Diagnostic_Brain_1/');
  }
  getResultBrainTwo():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Result_Diagnostic_Brain_2/');
  }
  getResultBreastOne():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Result_Diagnostic_Breast_1/');
  }
  getResultBreastTow():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'doctor/Result_Diagnostic_Breast_2/');
  }

  //Add
  addAlert(val:any){
    return this.http.post(this.APIUrl + 'doctor/Alertes/',val);
  }
  addDoctor(val:any){
    return this.http.post(this.APIUrl + 'accounts/add_doctor/',val);
  }
  addPatient(val:any){
    return this.http.post(this.APIUrl + 'doctor/Patient/',val);
  }

  addSign(val:any){
    return this.http.post(this.APIUrl + 'doctor/Sign/',val);
  }

  addDiagnosticBreastOne(val:any){
    return this.http.post(this.APIUrl + 'doctor/Diagnostic_Breast_1/',val);
  }
  addDiagnosticBreastTwo(val:any){
    return this.http.post(this.APIUrl + 'doctor/Diagnostic_Breast_2/',val);
  }
  addDiagnosticBrainOne(val:any){
    return this.http.post(this.APIUrl + 'doctor/Diagnostic_Brain_1/',val);
  }
  addDiagnosticBrainTwo(val:any){
    return this.http.post(this.APIUrl + 'doctor/Diagnostic_Brain_2/',val);
  }
  addResultBrainOne(val:any){
    return this.http.post(this.APIUrl + 'doctor/Result_Diagnostic_Brain_1/',val);
  }
  addResultBrainTwo(val:any){
    return this.http.post(this.APIUrl + 'doctor/Result_Diagnostic_Brain_2/',val);
  }
  addResultBreastOne(val:any){
    return this.http.post(this.APIUrl + 'doctor/Result_Diagnostic_Breast_1/',val);
  }
  addResultBreastTwo(val:any){
    return this.http.post(this.APIUrl + 'doctor/Result_Diagnostic_Breast_2/',val);
  }
  //Update
  updateUser(val:any){
    return this.http.put(this.APIUrl + 'core/Users/',val);
  }
  updatePatient(val:any){
    return this.http.put(this.APIUrl + 'doctor/Patient/',val);
  }

  updateSign(val:any){
    return this.http.put(this.APIUrl + 'doctor/Sign/',val);
  }

  updateDiagnosticBreastOne(val:any){
    return this.http.put(this.APIUrl + 'doctor/Diagnostic_Breast_1/',val);
  }
  updateDiagnosticBreastTwo(val:any){
    return this.http.put(this.APIUrl + 'doctor/Diagnostic_Breast_2/',val);
  }
  updateDiagnosticBrainOne(val:any){
    return this.http.put(this.APIUrl + 'doctor/Diagnostic_Brain_1/',val);
  }
  updateDiagnosticBrainTwo(val:any){
    return this.http.put(this.APIUrl + 'doctor/Diagnostic_Brain_2/',val);
  }
  updateResultBrainOne(val:any){
    return this.http.put(this.APIUrl + 'doctor/Result_Diagnostic_Brain_1/',val);
  }
  updateResultBrainTwo(val:any){
    return this.http.put(this.APIUrl + 'doctor/Result_Diagnostic_Brain_2/',val);
  }
  updateResultBreastOne(val:any){
    return this.http.put(this.APIUrl + 'doctor/Result_Diagnostic_Breast_1/',val);
  }
  updateResultBreastTwo(val:any){
    return this.http.put(this.APIUrl + 'doctor/Result_Diagnostic_Breast_2/',val);
  }

  //Delete
  deleteUser(id:number){
    return this.http.delete(this.APIUrl + 'core/Users/'+id);
  }
  deletePatient(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Patient/'+id);
  }
  deleteSign(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Sign/'+id);
  }

  deleteDiagnosticBreastOne(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Diagnostic_Breast_1/'+id);
  }
  deleteDiagnosticBreastTwo(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Diagnostic_Breast_2/'+id);
  }
  deleteDiagnosticBrainOne(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Diagnostic_Brain_1/'+id);
  }
  deleteDiagnosticBrainTwo(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Diagnostic_Brain_2/'+id);
  }
  deleteResultBrainOne(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Result_Diagnostic_Brain_1/'+id);
  }
  deleteResultBrainTwo(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Result_Diagnostic_Brain_2/'+id);
  }
  deleteResultBreastOne(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Result_Diagnostic_Breas_1/'+id);
  }
  deleteResultBreastTwo(id:number){
    return this.http.delete(this.APIUrl + 'doctor/Result_Diagnostic_Breas_2/'+id);
  }

  //Upload Photo
  uploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/PhotoUrl/',val);
  }

}
