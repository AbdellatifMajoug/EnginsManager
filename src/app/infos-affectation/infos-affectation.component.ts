import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DemandesListComponent } from 'app/demandes-list/demandes-list.component';
import { AffectationService } from 'app/services/affectation.service';
import { DemandeService } from 'app/services/demande.service';

@Component({
  selector: 'app-infos-affectation',
  templateUrl: './infos-affectation.component.html',
  styleUrls: ['./infos-affectation.component.scss']
})
export class InfosAffectationComponent implements OnInit {

  @Input() details : any;
  @Input() engin : any;
  @Output() closeWindow = new EventEmitter<void>();
  @Output() Affectation = new EventEmitter<void>();
  currentDate: any;
  disabled: boolean = true;
  affectation = {
    idA: 0,
    observationS:'',
    compteurS:0,
    dateS: '',
    detailsDemande:{ id:0 },
    engin: {idE:0,
            sortie:false
          }
  };
  errorMessage:string;

  constructor(private affService: AffectationService, private ds: DemandeService) { }

  close() {
    this.closeWindow.emit();
  }

  affecter(){
    this.affectation.detailsDemande = this.details;
    this.affectation.compteurS = this.engin.compteur;
    this.affectation.engin = this.engin;
    this.affectation.engin.sortie=true;
    this.affService.addAffectaion(this.affectation).subscribe(
      (res:any)=>{
        if(res===null){
          this.errorMessage = "La date de sortie n'est pas valide";
        }
        else{
          this.details.demande.dateS = this.affectation.dateS;
          let dem = this.details.demande;
          this.ds.UpdateEtatDemande(dem).subscribe(
            (result:any)=>{
            },(err)=>{
              console.log(err);
            }
          )
          let aff :any = this.affectation;
          this.Affectation.emit(aff.engin);
          alert("L'engin "+aff.engin.nomEngin+" a été sorti");
        }
      },err=>{
        this.affectation.engin.sortie=false;
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.affectation.dateS = this.details.demande.dateS;
    this.currentDate = new Date();
    const formattedDate = this.currentDate.toISOString().split('T')[0];
    if(this.affectation.dateS < formattedDate){
      this.errorMessage = "La date de sortie pour cette demande précéde la date courante, veuillez la modifier";
      this.disabled=false;
    }
  }

}
