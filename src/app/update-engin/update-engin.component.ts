import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-update-engin',
  templateUrl: './update-engin.component.html',
  styleUrls: ['./update-engin.component.scss']
})
export class UpdateEnginComponent implements OnInit {

  @Output() closeWindow = new EventEmitter<void>();
  @Input() idE: any | undefined;
  engin:any;
  errorMessage: string;
  
  constructor(private _shared: SharedService) { }

   getEngin(idE:number) {
    this._shared.EnginById(idE).subscribe(
      (res:any)=>{
        this.engin = res;
        console.log(this.engin);
      },err=>{
        console.log(err);
      }
    )
  }

  updateEngin(){
    this._shared.updateEngin(this.idE,this.engin).subscribe(
      (res:any)=>{
        alert("L'engin "+this.engin.nomEngin+" a été modifié");
        location.reload();
        this.close();
      },(err)=>{
        this.errorMessage = "Vérifier votre saisie!";
        console.log(err);
      }
    )
  }

  close() {
    this.closeWindow.emit();
  }

  ngOnInit(): void {
    this.getEngin(this.idE);
  }

}
