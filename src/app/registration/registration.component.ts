import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  errorMessage: string = null;

  user = {
    username: '',
    password: '',
    nom: '',
    prenom: ''
  };
  
  constructor(private userService:UserService, private router: Router, private location: Location) { }

  SignUp(){
    this.userService.registration(this.user).subscribe(
      (res:any)=>{
        if(res===null){
          this.errorMessage = "Username déjà existant";
        }else{
          this.errorMessage = null;
          this.router.navigateByUrl('/login');
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  goBack(){
    this.location.back();
  }

  ngOnInit(): void { }

}
