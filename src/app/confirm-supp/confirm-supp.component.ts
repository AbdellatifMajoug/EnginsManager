import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AffectationService } from 'app/services/affectation.service';
import { DemandeService } from 'app/services/demande.service';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-confirm-supp',
  templateUrl: './confirm-supp.component.html',
  styleUrls: ['./confirm-supp.component.scss']
})
export class ConfirmSuppComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();
  @Input() idE: any | undefined;
  @Input() idAff: any | undefined;
  @Input() numBCI: any | undefined;
  
  constructor(private _shared: SharedService, private affService: AffectationService, private ds: DemandeService) { }

  Confirmer() {
    if(this.idE){
      this._shared.deleteEngin(this.idE).subscribe(
        (res:any)=>{
          this.idE = null;
          alert("L'engin a été supprimé");
          location.reload();
          this.closeModal.emit();
        },err=>{
          console.log(err);
        }
      )
    }
    if(this.idAff){
      this.affService.deleteAffectation(this.idAff).subscribe(
        (res:any)=>{
          this.idAff = null;
          alert("L'affectation a été supprimée");
          location.reload();
          this.closeModal.emit();
        },err=>{
          console.log(err);
        }
      )
    }
    if(this.numBCI){
      this.ds.deleteDemmande(this.numBCI).subscribe(
        (res:any)=>{
          this.numBCI = null;
          alert("La demande a été supprimée");
          location.reload();
          this.closeModal.emit();
        },err=>{
          console.log(err);
        }
      )
    }
  }

  CloseModal() {
    this.closeModal.emit();
  }

  ngOnInit(): void { }

}
