import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'app/services/user-auth.service';

@Component({
  selector: 'app-dahsboard-assistant',
  templateUrl: './dahsboard-assistant.component.html',
  styleUrls: ['./dahsboard-assistant.component.scss']
})
export class DahsboardAssistantComponent implements OnInit {

  show:number;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    // this.userName = this.userAuthService.getuserName();
  }

}

