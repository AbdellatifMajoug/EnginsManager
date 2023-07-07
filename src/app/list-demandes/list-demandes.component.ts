import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'app/services/demande.service';
import { UserAuthService } from 'app/services/user-auth.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandeComponent implements OnInit {

  demandes:any;
  pages:any;
  size:number=5;
  currentPageD:number=0;
  demande:any;
  details:any;
  numBCI: number;
  showModal: any;
  userName:string;

  constructor(private ds:DemandeService, private userAuthService: UserAuthService, private router: Router) { }

  getDemandes()
  {
    this.ds.DemByUsername(this.currentPageD,this.size,this.userName)
    .subscribe(
      (res:any)=>{
        this.demandes = res;
        this.pages = new Array(res.totalPages);   
      },err=>{
        console.log(err);
        
      }
    )
  }

  goTopageDemandes(i:number){
    this.currentPageD=i;
    this.getDemandes();    
  }

  Details(numBCI:number){
    localStorage.setItem('numDeman', numBCI.toString());
    this.router.navigate(['/demandeur/listeDetails']);
  } 

  openModal(numBCI:number) {
    this.numBCI = numBCI;
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  ngOnInit() {
    this.userName = this.userAuthService.getuserName().replace(/"/g, '');
    this.getDemandes();
  }


}
