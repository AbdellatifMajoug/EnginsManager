import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'app/services/user-auth.service';
import { UserService } from 'app/services/user.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const routesDem: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'addD', title: 'Déposer demande',  icon:'add', class: '' },
  { path: 'listeDem', title: 'Liste des demandes',  icon:'list_alt', class: '' }
];

export const routesAssist: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'i', title: '',  icon:'', class: '' },
  { path: 'i', title: 'Demandes :',  icon:'', class: 'colorItem' },
  { path: 'listeDem', title: 'Liste des demandes',  icon: 'list_alt', class: '' },
  { path: 'i', title: 'Affectations :',  icon:'', class: 'colorItem' },
  { path: 'ajoutAff', title: 'Nouvelle Affectation',  icon:'add', class: '' },
  { path: 'listeAff', title: 'Liste des affectation',  icon:'list', class: '' },
  { path: 'i', title: 'Engins :',  icon:'', class: 'colorItem' },
  { path: 'listeEng', title: 'Liste des engins',  icon:'agriculture', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItemsDem: any[];
  menuItemsAssist: any[];
  userName = this.userAuthService.getuserName().replace(/"/g, '');
  
  constructor(public userService:UserService, public userAuthService: UserAuthService) { }

  ngOnInit() {
    this.menuItemsDem = routesDem.filter(menuItemsDem => menuItemsDem);
    this.menuItemsAssist = routesAssist.filter(menuItemsAssist => menuItemsAssist);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
