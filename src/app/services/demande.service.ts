import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8080/demandes"; 

  AllDemands(page:number,size:number){
    return this.http.get(this.url+'/allD?size='+size+'&page='+page);
  }

  AllDem(){
    return this.http.get(this.url+'/allDemandes');
  }

  DemByUsername(page:number,size:number,userName:string){
    return this.http.get(this.url+'/allDem?size='+size+'&page='+page+'&userName='+userName);
  }

  nbD(){
    return this.http.get(this.url+'/nbD');
  }

  DemandeById(numBCI:any){
    return this.http.get(this.url+'/findD/'+numBCI);
  }

  DemTraite(){
    return this.http.get(this.url+'/nbTraite');
  }

  searchDemands(mc:any,page:number,size:number){
    return this.http.get(this.url+'/searchD?mc='+mc+'?size='+size+'&page='+page);
  }

  findEnginByFamille(idF:number,page:number,size:number){
    return this.http.get(this.url+'/findFam/'+idF+'?size='+size+'&page='+page);
  }

  getEntite(){
    return this.http.get(this.url+'/entites');
  }

  getPostes(id:any){
    return this.http.get(this.url+'/findPoste?id='+id);
  }

  getFamille(){
    return this.http.get(this.url+'/familles');
  }

  getShift(){
    return this.http.get(this.url+'/shifts');
  }

  getDetails(num:any){
    return this.http.get(this.url+'/details?num='+num);
  }

  ajouterDemande(demande:any){
    return this.http.post(this.url+'/addD', demande);
  }

  UpdateEtatDemande(demande:any){
    return this.http.put(this.url+'/updateD/'+demande.numBCI, demande);
  }

  ajouterDetail(ds:any) {
    return this.http.post(this.url+'/addDetail',ds);
  }

  deleteDemmande(numBCI:any) {
    return this.http.delete(this.url+'/deleteD/'+numBCI);
  }

}
