import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AffectationService } from 'app/services/affectation.service';
import { DemandeService } from 'app/services/demande.service';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-ajout-affectaion',
  templateUrl: './ajout-affectaion.component.html',
  styleUrls: ['./ajout-affectaion.component.scss']
})
export class AjoutAffectaionComponent implements OnInit {

  numBCI:number;
  demande:any;
  details:any;
  showModal = false;
  famille:any;
  engins:any[];
  quantite:number;
  showAff: boolean = false;
  engin:any;

  constructor(private route: ActivatedRoute, private ds: DemandeService, private affService: AffectationService, private _shared:SharedService, private router:Router) { 
    const numBCI = localStorage.getItem('numBCI');
    if (numBCI) {
      this.numBCI = parseInt(numBCI);
      this.getDamande(this.numBCI);
      this.getDetails(this.numBCI);
      // this.controlAffectation(this.numBCI);
  }
  }

  getDetails(num:any){
    this.ds.getDetails(num).subscribe(
      (res:any)=>{
        this.details = res[0]; 
        this.famille =  res[0].famille;
        this.quantite =  res[0].quantite;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getDamande(num:number){
    this.demande = this.ds.DemandeById(num)
    .subscribe(
      res=>{
        this.demande = res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  controlAffectation(idF: number) {
    let engs: any;
    let engDisp: any[] = [];
    this._shared.findEnginByFam(idF).subscribe(
      (res: any) => {
        engs = res;
        engs.forEach(element => {
          if (element.sortie === false) {
            engDisp.push(element);
            console.log(element);
          }
        });
        if (engDisp.length === 0) {
          this.setEtatDemande(this.demande);
          this.router.navigate(['/assistant/dashboard']);
        }else{
          location.reload();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  affecter(eng:any){
    this.showAff = false;
    let idF = eng.famille.idF;
    this.controlAffectation(idF);
  }

  setEtatDemande(demande:any){
    this.ds.DemandeById(demande.numBCI)
    .subscribe(
      (res:any)=>{
        demande.etat = true;
        this.setEtat(demande);
      },
      err=>{
        console.log(err);
      }
    )
  }

  setEtat(demande:any){
    this.ds.UpdateEtatDemande(demande).subscribe(
      (res:any)=>{
      },(err)=>{
        console.log(err);
      }
    )
  }

  onAffecterClicked(eng:any) {
    this.showAff = true;
    this.engin=eng;
  }

  openModal() {
    this.showModal = true;
  }

  closeWindow(){
    this.showAff = false;
  }

  closeModal() {
    this.showModal = false;
    this.toggleBodyOverflow();
  }

  receiveEngins(engins: any[]){
    this.engins = engins;
  }

  private toggleBodyOverflow() {
    const bodyElement = document.getElementsByTagName('body')[0];
    if (this.showModal) {
      bodyElement.classList.add('modal-open');
    } else {
      bodyElement.classList.remove('modal-open');
    }
  }

  onEnginUpdated(updatedEngin: any) {
    const index = this.engins.findIndex((e: any) => e.idE === updatedEngin.idE);
    if (index !== -1) {
      this.engins[index] = updatedEngin;
    }
  }

  ngOnInit() { 
    // this.route.queryParams.subscribe(params => {
    //   this.numBCI = params['numBCI'];
    //   this.getDamande(this.numBCI);
    //   this.getDetails(this.numBCI);
    // });
  }
}
