import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteringUser } from './userRegister.model';

function passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  // tslint:disable-next-line:object-literal-key-quotes
  return {'match': true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  customerRegisterInfo: RegisteringUser;

  constructor(
    private fb: FormBuilder,
    private router: Router) {}


  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {

  }

  public createForm(): void {

    // TODO move to valueChanges for better control leverage
    this.registerForm = this.fb.group({
      firstName: ['', [ Validators.required, Validators.minLength(2) ]],
      lastName: ['', [ Validators.required, Validators.minLength(2) ]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9.@]*') ]], // temp pattern
      userName: ['', [ Validators.required, Validators.minLength(2)]],
      password: ['', [ Validators.required, Validators.minLength(3) ]],
    });
  }

  public onSubmit(): void {
    console.log('next steps sending registration info');
    this.router.navigateByUrl('/profile');
  }

}
