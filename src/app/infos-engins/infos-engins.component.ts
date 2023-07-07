import { Component, EventEmitter, OnInit, Output, Input, SimpleChanges  } from '@angular/core';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-infos-engins',
  templateUrl: './infos-engins.component.html',
  styleUrls: ['./infos-engins.component.scss']
})
export class InfosEnginsComponent implements OnInit {

  constructor(private _shared: SharedService) { }

  @Output() closeModal = new EventEmitter<void>();
  @Output() sendEngins = new EventEmitter<any[]>();
  @Input() famille: any | undefined;
  @Input() quantite: any | undefined;

  enginsByFam:any;
  engins:any[];
  errorMessage:string;
  emptyList:string;

  getEngins() {
    this._shared.findEnginByFam(this.famille.idF)
      .subscribe(
        (res: any) => {
          this.enginsByFam = [];
          res.forEach(e => {
            if (!e.sortie) {
              this.enginsByFam.push(e); 
            }
          });
          if(this.enginsByFam.length===0){
            this.emptyList = "Aucun engin disponible";
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  setEngins(){
    if(this.engins.length > this.quantite){
      this.errorMessage = "Quantité choisie > Quantité demandée";
    }
    else{
      this.errorMessage = null;
    }
    this.sendEngins.emit(this.engins);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.famille && !changes.famille.firstChange) {
      this.getEngins();
    }
  }

  close() {
    this.closeModal.emit();
  }

  ngOnInit(): void {
  }

  // getEngins(){
  //   this._shared.findEnginByFam(this.famille.idF)
  //   .subscribe(
  //     (res:any)=>{
  //       res.forEach(e => {
  //         if(e.sortie!=true){
  //           this.enginsByFam = e;
  //         }
  //       });
  //     },
  //     err=>{
  //       console.log(err);
        
  //     }
  //   )
  // }

}
