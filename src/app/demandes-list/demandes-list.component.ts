import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'app/services/demande.service';

@Component({
  selector: 'app-demandes-list',
  templateUrl: './demandes-list.component.html',
  styleUrls: ['./demandes-list.component.scss']
})
export class DemandesListComponent implements OnInit {

  demandes:any;
  pages:any;
  size:number=5;
  currentPageD:number=0;

  constructor(private ds:DemandeService, private router: Router) {   
    this.getDemandes();
  }

  getDemandes()
  {
    this.ds.AllDemands(this.currentPageD,this.size)
    .subscribe(
      (res:any)=>{
        this.demandes = res;
        this.pages = new Array(res.totalPages);    
      },err=>{
        console.log(err);
      }
    )
  }

  Affectation(numBCI:number){
    localStorage.setItem('numBCI', numBCI.toString());
    this.router.navigate(['/assistant/ajoutAff']);
    // this.router.navigate(['/assistant/ajoutAff'], { queryParams: { numBCI: numBCI } });
  }

  goTopageDemandes(i:number){
    this.currentPageD=i;
    this.getDemandes();
  }

  ngOnInit() { }

}
