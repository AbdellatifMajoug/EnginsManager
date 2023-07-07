import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AffectationService } from 'app/services/affectation.service';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-entree-engin',
  templateUrl: './entree-engin.component.html',
  styleUrls: ['./entree-engin.component.scss']
})
export class EntreeEnginComponent implements OnInit {

  @Input() idE: any | undefined;
  @Output() enginUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeModalAff: EventEmitter<any> = new EventEmitter<any>();
  affectation: any;
  details: any;
  engin: any;
  errorMessage: string;

  closeModal(): void {
    // Code to close the modal
    this.closeModalAff.emit();
  }
  constructor(private affService: AffectationService, private _shared: SharedService, private router: Router){}

  AffByEngin(){
    this.affService.affectationByEng(this.idE).subscribe(
      (res:any)=>{
        this.affectation = res;
        this.affectation.compteurE = this.affectation?.engin?.compteur;
        this.details = res.detailsDemande;
      },(err)=>{
        console.log(err);
      }
    )
  }

  Entrer(affectation:any){

    this.affService.updateEntree(affectation.idA,affectation).subscribe(
      (res:any)=>{
        if(res===null){
          this.errorMessage = "Date d'entrée non valide!";
        }
        else{
          alert("L'entrée a été bien effectuée");
          res.engin.sortie = false;
          this.engin = res.engin;
          this._shared.updateEngin(this.engin.idE, this.engin).subscribe();
          this.close();
          location.reload();
        }
      },(err)=>{
        this.errorMessage = "Vérifier votre saisie!";
        console.log(err);
      }
    )
  }

  close(){
    this.closeModalAff.emit();
  }

  ngOnInit(): void { 
    this.AffByEngin(); 
  }

}
