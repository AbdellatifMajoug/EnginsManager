import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'app/services/demande.service';
import { SharedService } from 'app/services/shared.service';
import { UserAuthService } from 'app/services/user-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css']
})
export class AjoutDemandeComponent implements OnInit {

  constructor(private _shared:SharedService, private ds:DemandeService, private userAuthService: UserAuthService, private router: Router) {}

  show:number=0;
  enginsByFam:any;
  postes: any;
  familles: any;
  entites: any;
  shifts: any;
  username:any;
  nbEng: number=0;
  errorMessage: string;
  error:string;

  nouvelleDemande = {
    numBCI:0,
    dateS: '',
    etat: false,
    entite: { id: 1 },
    user: { username: '' }, 
    shift: { idS: 1 }, 
    poste: { id: 1 }, 
    
  };

  detailsDemande = {
    demande: { numBCI: 1 }, 
    famille: { idF: 1 }, 
    quantite:0,
    observation:''
  };

  addDemande(){
    this.nouvelleDemande.user.username = this.username;
    this.ds.ajouterDemande(this.nouvelleDemande)
      .subscribe(
      (res:any) => {
        if(res===null){
          this.errorMessage = "Date de sortie non valide";
        }else{
          this.show=1;
          this.detailsDemande.demande.numBCI = res.numBCI;
          this.errorMessage=null;
        }
      },
      error => {
        console.error(error);
      }
    )
  }

  addDetail(){
    console.log(this.nbEng);
    if(this.detailsDemande.quantite>this.nbEng){
      this.error = "Queantité saisie > Quantité disponible";
    }else{
      this.ds.ajouterDetail(this.detailsDemande).subscribe(
        res=>{
        },
        err=>{
          console.log(err);
        }
      )
      alert('Demande bien ajoutée');
      this.nouvelleDemande = null;
      this.router.navigate(['/demandeur/listeDem']);
    }
  }

  getEntites()
  {
    this.ds.getEntite()
    .subscribe(
      (res:any)=>{
        this.entites = res;
      },err=>{
        console.log(err);   
      }
    )
  }

  getShifts()
  {
    this.ds.getShift()
    .subscribe(
      (res:any)=>{
        this.shifts = res;
      },err=>{
        console.log(err);   
      }
    )
  }

  getFamilles()
  {
    this.ds.getFamille()
    .subscribe(
      (res:any)=>{
        this.familles = res;
      },err=>{
        console.log(err);   
      }
    )
  }

  onChange(idF:any){
    this._shared.findEnginByFam(idF)
    .subscribe(
      (res:any)=>{
        this.enginsByFam = res;
        this.nbEng = res.length;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  findPostes(id:any){
    this.ds.getPostes(id)
    .subscribe(
      res=>{
        this.postes = res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  ngOnInit() {
    this.username = this.userAuthService.getuserName().replace(/"/g, '');
    this.getEntites();
    this.getShifts();
    this.getFamilles();
  }

}
