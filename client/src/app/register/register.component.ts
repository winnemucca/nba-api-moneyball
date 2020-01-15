import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteringUser } from './userRegister.model';
import { debounceTime } from 'rxjs/operators';

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
  emailMessage: string;

  // todo make reusable and move to service
  private validationMessages = {
    required: 'Please enter your email address',
    pattern: 'Please enter a valid email address',
    email: 'Please enter a valid email address'
  };

  accountValidationMessages = {
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase letter and one number' }
    ]
  };

  constructor(
    private fb: FormBuilder,
    private router: Router) {}


  ngOnInit() {
    this.createForm();
    // evaluate whole form next
    const emailControl = this.registerForm.get('email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe( value => this.setMessage(emailControl));

  }

  ngOnDestroy() {

  }

  public createForm(): void {

    // TODO move to valueChanges for better control leverage
    this.registerForm = this.fb.group({
      firstName: ['', [ Validators.required, Validators.minLength(3) ]],
      lastName: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.email ]],
      userName: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      password: ['', [ Validators.required, Validators.minLength(5) ]],
    });
  }

  public onSubmit(): void {
    console.log('next steps sending registration info');
    this.router.navigateByUrl('/profile');
  }

  // todo make more reusable for other inputs
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }
  }

  controlsMessage(c: AbstractControl): void {

  }

}
