import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IResgisterForm } from '../interfaces/register-form.interface';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public formSubmitted = false;

  public registerForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repassword: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    terminos: [ false, Validators.required ],
  }, { validators: this.matchPasswords });

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {}


registerUser() {
  this.formSubmitted = true;
  if (this.registerForm.invalid) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa el formulario correctamente.',
    });
    return;
  }

  const formData: IResgisterForm = {
    nombre: this.registerForm.get('nombre')!.value,
    password: this.registerForm.get('password')!.value,
    email: this.registerForm.get('email')!.value,
  };
  this.authService.signup(formData).subscribe({
    next: (resp) => {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El usuario ha sido creado con éxito.',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home']); // Asegúrate de que la ruta '/home' esté definida en tu configuración de rutas.
        }
      });
      console.log('Usuario creado', resp);
    },
    error: (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar',
        text: 'Hubo un problema al crear el usuario, por favor intenta de nuevo.',
      });
      console.error('Error al crear usuario', err);
    }
  });
  

  // this.authService.signup(formData).subscribe({
  //   next: (resp) => {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Registro exitoso',
  //       text: 'El usuario ha sido creado con éxito.',
  //     });
  //     console.log('Usuario creado', resp);
  //   },
  //   error: (err) => {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error al registrar',
  //       text: 'Hubo un problema al crear el usuario, por favor intenta de nuevo.',
  //     });
  //     console.error('Error al crear usuario', err);
  //   }
  // });
}
  notValidatedField(field: string): boolean {
    return this.formSubmitted && this.registerForm.get(field)!.invalid;
  }

  private matchPasswords(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')!.value;
    const repassword = group.get('repassword')!.value;
    return password === repassword ? null : { notMatching: true };
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }



}
