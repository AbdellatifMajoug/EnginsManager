import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-control-entree',
  templateUrl: './control-entree.component.html',
  styleUrls: ['./control-entree.component.scss']
})
export class ControlEntreeComponent implements OnInit {

  @Input() engin: any | undefined;
  @Output() enginUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  selectedEngin: any = null;
  remarque:string;
  disabled:boolean | false;

  constructor(private _shared: SharedService) { }

  getCriteres(engin:any){
    this.selectedEngin = engin;
    this.controlCriteres(this.engin.criteres);
  }

  updateEtat(critere: any, etat: boolean) {
    critere.etat = etat;
    const enginToUpdate = this.engin;
      if (enginToUpdate) {
        const updatedCritere = enginToUpdate.criteres.find((c: any) => c.nomCritere === critere.nomCritere);
        if (updatedCritere) {
          updatedCritere.etat = etat;
          this._shared.updateEngin(enginToUpdate.idE, enginToUpdate).subscribe(
            (response) => {
              this.enginUpdated.emit(enginToUpdate);
            },
            (error) => {
              console.error('Error updating engin:', error);
            }
          );
        }
      }
    this.controlCriteres(this.engin.criteres);
  }

  controlCriteres(c:any){
    let cr = c;
    let dis : boolean;
    cr.forEach((critere) => {
      if(critere.critique===true && critere.etat===false){
        dis = true;
      }
    });
    if(dis===true){
      this.disabled=true;
      dis=null;
    }else{
      this.disabled= false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.engins && !changes.engins.firstChange) {
    }
  }

  close() {
    this.closeModal.emit();
  }

  confirm(eng:any) {
    this.confirmed.emit(eng);
  }

  ngOnInit(): void {
    console.log(this.engin);
    this.getCriteres(this.engin);
  }

}
