import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-users',
  standalone: false,
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css',
  providers:[MessageService]
})
export class AddUsersComponent implements OnInit {
  userForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      numeroDeTelephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    // Simuler une requête HTTP
    setTimeout(() => {
      this.isLoading = false;
      this.messageService.add({ severity: 'success', summary: 'Enregistrement réussi', detail: 'Utilisateur enregistré avec succès' });
      this.userForm.reset();
    }, 2000);
  }

  onCancel(): void {
    this.router.navigate(['/directeur/list-boutiques']);
  }
}
