import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../modules/auth-module/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.messageErreur("JWT expiré, redirection vers la page de connexion.")
                    this.authService.logout();
                    this.router.navigate(['/connexion/']);
                }
                return throwError(() => error);
            })
        );
    }

    private messageErreur(error: String): void {
        Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Erreur :' + error,
            confirmButtonText: 'OK'
        });
    }
}
