import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { UserAuthService } from 'app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // userFormGroup : FormGroup;
  errorMessage: string = null;

  constructor(private userService: UserService, private router:Router, private userauthService: UserAuthService) {
   }

  ngOnInit(): void {
  }

  handleLogin(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (res:any)=>{
        this.userauthService.setRoles(res.user.roles);
        this.userauthService.setToken(res.jwtToken);
        
        const role = res.user.roles[0].roleName;

        if(role === "Demandeur"){
          this.router.navigateByUrl("/demandeur/dashboard");
        }else if(role === "Assistant"){
          this.router.navigateByUrl("/assistant/dashboard");
        }
      },
      err=>{
        this.errorMessage= "Login ou mot de passe incorrect";
        console.log(err);
      }
    )
    
  }


}
