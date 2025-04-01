import { Component } from '@angular/core';
import { VerifyCodeRequest } from '../../../../models/request/verify-code-request';
import { VerificationService } from '../../../../services/verification/verification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: false,
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {

  verificationData: VerifyCodeRequest = {
    email: '',
    code: ''
  };

  constructor(private verificationService: VerificationService, private router: Router) { }

  onSubmit(): void {
    this.verificationService.completeVerification(
      this.verificationData,
      () => {
        this.router.navigate(['/auth/connexion']);
        console.log('Redirection...');
      }
    );
  }

}
