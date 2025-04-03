import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VerificationService } from '../../../../services/verification/verification.service';

@Component({
  selector: 'app-verification',
  standalone: false,
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationData = {
    email: '',
    code: ''
  };
  user: any = null;

  constructor(
    private verificationService: VerificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.user);
    this.loadUserData();
  }

  loadUserData(): void {
    this.user = this.authService.getUserClaims();
    if (this.user) {
      this.verificationData.email = this.user.email || '';
    }
  }

  onSubmit(): void {
    if (!this.user?.sub) {
      this.showError('User information not available');
      return;
    }

    this.verificationService.verifyAccount(this.verificationData).subscribe({
      next: (response) => {
        if (response.data) {
          this.showSuccess('Account verified successfully!');
          this.router.navigate(['/auth/login']);
        } else {
          this.showError(response.message || 'Verification failed');
        }
      },
      error: (err) => {
        this.showError(err.error?.message || 'Server error occurred');
      }
    });
  }

  private showSuccess(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      timer: 2000,
      showConfirmButton: false
    });
  }

  private showError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonText: 'OK'
    });
  }
}