import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../auth-module/services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  claims:any=null;

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.claims = this.authService.getUserClaims();
  }

  logout() {
    this.authService.logout();
  }

}
