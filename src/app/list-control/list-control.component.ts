import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.scss']
})
export class ListControlComponent implements OnInit {

  @Input() engins: any | undefined;
  @Output() enginUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() affecterClicked: EventEmitter<void> = new EventEmitter<void>();
  eng : any;
  show:number;
  selectedEngin: any = null;
  remarque:string;
  disabled:boolean | false;

  constructor(private _shared: SharedService) { }

  getCriteres(engin:any){
    this.show=1;
    this.selectedEngin = engin;
    this.eng = engin;
    this.controlCriteres(this.eng.criteres);
  }

  updateEtat(critere: any, etat: boolean) {
    critere.etat = etat;
    critere.remarque= this.remarque;
  
    if (this.engins && this.eng) {
      const enginToUpdate = this.engins.find((e: any) => e.idE === this.eng.idE);
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
    }
    this.controlCriteres(this.eng.criteres);
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

  affecterClick(eng:any) {
    this.affecterClicked.emit(eng);
  }

  ngOnInit(): void {
    this.show=0;
  }

}
