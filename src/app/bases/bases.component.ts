import { Component } from '@angular/core';
import { AuthService } from '../modules/auth-module/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bases',
  standalone: false,
  templateUrl: './bases.component.html',
  styleUrl: './bases.component.css'
})
export class BasesComponent {
  constructor(private router: Router, private authService: AuthService) { }

  // get hideMenu(): boolean {
  //   return this.router.url === '/';
  // }

  // claims: any | null = null;

  // ngOnInit(): void {
  //   this.isLogged();
  //   this.loadUserClaims();
  // }

  // logout(): void {
  //   this.authService.logout();
  // }

  // isLogged(): boolean {
  //   return this.authService.isAuthenticated();
  // }

  // loadUserClaims(): void {
  //   this.claims = this.authService.getUserClaims();
  //   console.log(this.claims);
  // }

}
