import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8080/";
  
  allAff(page:number,size:number){
    return this.http.get(this.url+'Affectations?size='+size+'&page='+page);
  }
  
  addAffectaion(affectation:any){
    return this.http.post(this.url+'addAff',affectation);
  }

  findAffectation(idA: number){
    return this.http.get(this.url+'find/'+idA);
  }

  affectationByEng(idE: number){
    return this.http.get(this.url+'affEng/'+idE);
  }

  updateAff(id: number, affectation: any){
    return this.http.put(this.url+'updateAff/'+id, affectation);
  }

  updateEntree(id: number, affectation: any){
    return this.http.put(this.url+'updateEntree/'+id, affectation);
  }

  deleteAffectation(idA: number){
    return this.http.delete(this.url+'deleteAff/'+idA);
  }
  
}
