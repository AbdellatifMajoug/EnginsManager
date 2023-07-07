import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8080/engins" 
  contacts : any[] = [];

  AllEngin(page:number,size:number){
    return this.http.get(this.url+'/allE?size='+size+'&page='+page);
  }

  searchEngins(mc:any,page:number,size:number){
    return this.http.get(this.url+'/searchE?mc='+mc+'?size='+size+'&page='+page);
  }

  EnginById(idE:number){
    return this.http.get(this.url+'/find/'+idE);
  }
  
  findEnginByFamille(idF:number,page:number,size:number){
    return this.http.get(this.url+'/findF/'+idF+'?size='+size+'&page='+page);
  }

  findEnginByFam(idF:number){
    return this.http.get(this.url+'/findFam/'+idF);
  }

  nbEngin(){
    return this.http.get(this.url+'/nbE');
  }

  EnginSortis(){
    return this.http.get(this.url+'/nbSorti');
  }

  EnginS(page:number,size:number){
    return this.http.get(this.url+'/engS');
  }

  EnginDisp(){
    return this.http.get(this.url+'/engindisp');
  }

  updateEngin(id: number, engin: any){
    return this.http.put(this.url+'/updateE/'+id, engin);
  }

  deleteEngin(idE: number){
    return this.http.delete(this.url+'/deleteE/'+idE);
  }

}
