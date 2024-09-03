import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  isLoading: boolean = false;
  isSuccess: boolean = false;
  hide:boolean = true
  msgError: string = '';
  private readonly _Router = inject(Router);
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _LoginService = inject(LoginService);
  loginForm: FormGroup = this._formBuilder.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._LoginService.setLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          this.isLoading = true;
          // console.log(res);
          if (res.message == 'success') {
            setTimeout(() => {
              localStorage.setItem('userToken', res.token);
              console.log(res.token);
              this._LoginService.saveUserData();
              this._Router.navigate(['/home']);
            }, 1000);
          }
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.isSuccess = true;
          this.isLoading = false;
          console.log(err);
          this.msgError = err.error.message;
        },
      });
    }
  }
  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
