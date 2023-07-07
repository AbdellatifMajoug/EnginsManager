import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'app/services/demande.service';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  nbD:any;
  nbE:any;
  nbTraite:any;
  nbSortis:any;
  enginsdisp:any;
  
  constructor(private ds: DemandeService, private _shared: SharedService) { }

  getnbD(){
    this.ds.nbD()
    .subscribe(
      res=>{
        this.nbD = res
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getnbEngins(){
    this._shared.nbEngin()
    .subscribe(
      res=>{
        this.nbE=res;        
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getSortis(){
    this._shared.EnginSortis()
    .subscribe(
      res=>{
        this.nbSortis=res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  EnginsDisp(){
    this._shared.EnginDisp()
    .subscribe(
      res=>{
        this.enginsdisp=res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getTraite(){
    this.ds.DemTraite()
    .subscribe(
      res=>{
        this.nbTraite=res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  ngOnInit(): void {
    this.getnbD();
    this.getSortis();
    this.getnbEngins();
    this.getTraite();
    this.EnginsDisp();
  }

}
