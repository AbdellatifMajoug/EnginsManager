import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { AffectationService } from 'app/services/affectation.service';

@Component({
  selector: 'app-update-affectation',
  templateUrl: './update-affectation.component.html',
  styleUrls: ['./update-affectation.component.scss']
})
export class UpdateAffectationComponent implements OnInit {

  
  @Output() closeWindow = new EventEmitter<void>();
  @Input() idAff: any | undefined;
  affectation:any;
  errorMessage: string;
  
  constructor(private affService: AffectationService) { }

   getAffectation(idA:number) {
    this.affService.findAffectation(idA).subscribe(
      (res:any)=>{
        this.affectation = res;
      },err=>{
        console.log(err);
      }
    )
  }

  updateAffectation(){
    this.affService.updateAff(this.idAff,this.affectation).subscribe(
      (res:any)=>{
        console.log(res);
        if(res===null){
          this.errorMessage = "Vérifier votre saisie!";
        }
        else{
          alert("L'affectation a été modifiée");
          location.reload();
          this.close();
        }
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
    this.getAffectation(this.idAff);
  }

}
