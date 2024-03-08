import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [ localStorage.getItem('email') || 'flowermoreno7@gmail.com', [Validators.required, Validators.email]], 
      password: ['123456', [Validators.required]],
      rememberme: [false]
    });
  }

  // onLogin(): void {
  //   if (this.loginForm.invalid) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error',
  //       text: 'Por favor, completa todos los campos requeridos.',
  //     });
  //     return; 
  //   }
    
  //   const credentials = {
  //     email: this.loginForm.value.username,
  //     password: this.loginForm.value.password
  //   };

  //   this.authService.login(credentials).subscribe({
     
  //     next: (response: any) => {
  //       if (this.loginForm.get('rememberme')?.value){
  //         localStorage.setItem('nombre',this.loginForm.get('nombre')?.value)
  //       } else{
  //         localStorage.removeItem('nombre')

  //       }
  //       console.log('Inicio de sesión exitoso:', response);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Inicio de sesión exitoso',
  //         showConfirmButton: false,
  //         timer: 1500
  //       }).then(() => {
  //         this.router.navigateByUrl('/home'); // Redirige al usuario a la página de inicio después del login
  //       });
  //     },
  //     error: (error: any) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error en el inicio de sesión',
  //         text: 'Usuario o contraseña incorrectos',
  //       });
  //       console.error('Error en el inicio de sesión:', error);
  //     }
  //   });
  // }

  onLogin(): void {
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
      });
      return; 
    }
    
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
  
    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        if (this.loginForm.get('rememberme')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }
        console.log('Inicio de sesión exitoso:', response);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigateByUrl('/home'); // Redirige al usuario a la página de inicio después del login
        });
      },
      error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en el inicio de sesión',
          text: 'Usuario o contraseña incorrectos',
        });
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
  
}
