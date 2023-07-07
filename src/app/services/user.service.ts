import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="http://localhost:8080";
  private requestHeader = new HttpHeaders({"no-Auth":"True"}); 

  constructor(private http: HttpClient, private userAuthService: UserAuthService){ }

  public login(loginData){
    this.userAuthService.setuserName(loginData.userName);
    return this.http.post(this.url+'/authenticate',loginData, {headers: this.requestHeader});
  }

  public registration(user:any){
    return this.http.post(this.url+'/registration',user);
  }

  public roleMatch(allowedRoles){
    let isMatch = false;
    const userRoles:any = this.userAuthService.getRoles();

    if(userRoles!= null && userRoles){
      if(userRoles[0].roleName === allowedRoles){
        isMatch = true;
        return isMatch;
      }else{
        return isMatch;
      }
    }
  }

  public getSocietes(){
    return this.http.get(this.url+'/demandes/societes');
  }
  
}
