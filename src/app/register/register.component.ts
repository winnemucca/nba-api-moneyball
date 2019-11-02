import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}


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
  }

}
