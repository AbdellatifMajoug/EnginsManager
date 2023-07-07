import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/shared.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-list-engins',
  templateUrl: './list-engins.component.html',
  styleUrls: ['./list-engins.component.scss']
})
export class ListEnginsComponent implements OnInit {

  currentPageE:number=0;
  pages:any;
  engins:any;
  engin:any;
  size:number=4;
  showModal:any;
  showModalAff:any;
  showWindow:any;
  showAff:any;
  idE: number;
  
  constructor(private _shared: SharedService, public userService: UserService) { }

  getEngins()
  {
    this._shared.AllEngin(this.currentPageE,this.size)
    .subscribe(
      (res:any)=>{
        this.engins = res;
        this.pages = new Array(res.totalPages);  
        
      },err=>{
        console.log(err);
        
      }
    )
  }

  sendIdE(engin:any){
    this.idE = engin.idE;
    this.closeAff();
    this.openModalAff();
  }

  openModalAff() {
    this.showModalAff = true;
  }
  
  openModal(idE:number) {
    this.idE = idE;
    this.showModal = true;
  }

  openWindow(idE:number) {
    this.idE = idE;
    this.showWindow = true;
  }

  openAff(e:number) {
    this.engin = e;
    this.showAff = true;
  }

  closeModal(){
    this.showModal = false;
  }
  
  closeModalAff(){
    this.showModalAff = false;
  }

  closeWindow(){
    this.showWindow = false;
  }

  closeAff(){
    this.showAff = false;
  }

  goTopageEngins(i:number){
    this.currentPageE=i;
    this.getEngins();    
  }

  ngOnInit(): void {
    this.getEngins();
  }

}
