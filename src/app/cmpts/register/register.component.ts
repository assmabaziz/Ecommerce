import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenService } from '../../core/services/authen.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly _AuthenService = inject(AuthenService);
  private readonly _Router = inject(Router);
  private readonly _formBuilder = inject(FormBuilder);
  isLoading: boolean = false;
  isSuccess: boolean = false;
  messageError: string = '';
  meassageToken: string = ' ';

  registerForm: FormGroup = this._formBuilder.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rePassword: [null],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { Validators: this.confirmPassword }
  );
  registerSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._AuthenService.setRegisterForm(this.registerForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.message == 'success') {
            this.isSuccess = true;
            setTimeout(() => {
              this._Router.navigate(['/login']);
            }, 1000);
          }
          this.meassageToken = res.token;
          console.log(this.meassageToken);
        },
        error: (err) => {
          this.messageError = err.error.message;
          console.log(this.messageError);
          this.isLoading = false;
        },
      });
      // console.log(this.registerForm.value);
    } else {
      this.registerForm.setErrors({ mismatch: true });
      this.registerForm.markAllAsTouched();
    }
  }
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else return { mismatch: true };
  }
}
