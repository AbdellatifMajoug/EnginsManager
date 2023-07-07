import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DemandeService } from 'app/services/demande.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  numBCI: number;
  details:any ;
  demande:any;
  
  constructor(private ds: DemandeService, private location: Location) { 
    const numBCI = localStorage.getItem('numDeman');
    if(numBCI) {
      this.numBCI = parseInt(numBCI);
      this.DemandeByNum(this.numBCI);
    }
  }

  getDetails(num:any){
    this.ds.getDetails(num).subscribe(
      (res:any)=>{
        this.details = res[0];        
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  DemandeByNum(numBCI:any){
    this.ds.DemandeById(numBCI)
    .subscribe(
      res=>{
        this.demande=res;
        this.getDetails(numBCI);
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
  }

}
