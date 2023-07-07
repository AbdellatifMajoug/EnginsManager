import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'app/services/affectation.service';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.scss']
})
export class ListAffectationsComponent implements OnInit {

  currentPageA:number=0;
  pages:any;
  affectations:any;
  size:number=5;
  showModal:any;
  showWindow:any;
  idAff: number;
  
  constructor(private affService: AffectationService) { }

  getAffectations()
  {
    this.affService.allAff(this.currentPageA,this.size).subscribe(
      (res:any)=>{
        this.affectations = res;
        this.pages = new Array(res.totalPages);  
      }
    )
  }

  openModal(idAff:number) {
    this.idAff = idAff;
    this.showModal = true;
  }

  openWindow(idAff:number) {
    this.idAff = idAff;
    this.showWindow = true;
  }

  closeModal(){
    this.showModal = false;
  }

  closeWindow(){
    this.showWindow = false;
  }

  goTopageAffect(i:number){
    this.currentPageA=i;
    this.getAffectations();    
  }

  ngOnInit(): void {
    this.getAffectations();
  }

}
