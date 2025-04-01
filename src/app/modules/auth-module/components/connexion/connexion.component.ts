import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoginRequest } from '../../../../models/request/login-request';

@Component({
  selector: 'app-connexion',
  standalone: false,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {


  credentials: LoginRequest = { email: '', password: '' };

  error_email: String = "";
  error_password: String = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  check(): boolean {
    let isValid = true;

    this.clearErrors();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.credentials.email || !emailRegex.test(this.credentials.email) && this.credentials.email !== 'admin@gmail.com') {
      this.error_email = "L'email est obligatoire et doit être valide";
      isValid = false;
    }

    if (!this.credentials.password) {
      this.error_password = 'Le mot de passe est obligatoire';
      isValid = false;
    }

    return isValid;
  }

  login(): void {
    if (this.check()) {
      this.authService.login(this.credentials).subscribe({
        next: (response) => {
          this.authService.saveToken(response.data);
          this.messageSucces();
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
          this.messageErreur(err.message)
        }
      });
    }
  }


  private messageSucces(): void {
    Swal.fire({
      icon: 'success',
      title: 'Succès!',
      text: 'Connexion réussie',
      timer: 500,
      timerProgressBar: true,
    }).then(() => {
      this.router.navigate(['/main']);
    });
  }

  private messageErreur(error: String): void {
    Swal.fire({
      icon: 'error',
      title: 'Erreur!',
      text: '' + error,
      confirmButtonText: 'OK'
    });
  }


  public inDeveloppementMessage(): void {
    Swal.fire({
      icon: 'info',
      timer: 3000,
      title: 'Oupps !!!',
      text: 'Fonctionnalité en développement',
      timerProgressBar: true,
    })
  }


  clearErrors() {
    this.error_email = "";
    this.error_password = "";

  }

}
