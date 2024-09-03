import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenService } from '../../core/services/authen.service';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FlowbitService } from '../../core/services/flowbit.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  mesaageSent: string = '';
  messageError: string = '';
  step: number = 1;
  isValid: boolean = false;
  isSent: boolean = false;
  isNotSent: boolean = false;
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthenService = inject(AuthenService);
  private readonly _LoginService = inject(LoginService);

  private readonly _Router = inject(Router);
  constructor(private _FlowbitService: FlowbitService ) {}
  ngOnInit(): void {
    this._FlowbitService.loadFlowbite(() => {});
  }
  verifyEmail: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });
  verifyCode: FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required, Validators.pattern(/^\w{6}$/)]],
  });
  resetPassword: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });
  stepOne(): void {
    if (this.verifyEmail.valid) {
      this.isValid = true;
      let emailValue = this.verifyEmail.get('email')?.value;
      this.resetPassword.get('email')?.patchValue(emailValue);
      this._AuthenService.setEmailVerify(this.verifyEmail.value).subscribe({
        next: (res) => {
          console.log(res);
          this.mesaageSent = res.message;
          this.isSent = true;
          if (res.statusMsg == 'success') {
            setTimeout(() => {
              // console.log(res.message);
              this.step = 2;
            }, 500);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isValid = false;
          this.isSent = false;
          this.isNotSent = true;
          console.log(err);
          this.messageError = err.error.message;
          // console.log(this.messageError);
        },
      });
    }
  }
  stepTwo(): void {
    if (this.verifyCode.valid) {
      this.isValid = true;
      this._AuthenService.setCodeVerify(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.status == 'Success') {
            this.step = 3;
          }
        },
        error: (err) => {
          this.isValid = false;
          console.log(err);
        },
      });
    }
  }
  stepThree(): void {
    this._AuthenService.setResetPasword(this.resetPassword.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.token !== null) {
          localStorage.setItem('userToken', res.token);
          this._LoginService.saveUserData();
          this._Router.navigate(['/home']);
        }
      }
    });
  }
}
