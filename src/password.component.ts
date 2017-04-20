import { Component, Input} from '@angular/core';
import { FormGroup }       from '@angular/forms';
import { User }            from "./user.model";

@Component({
  selector: 'erdiko-password',
  template: `
<div class="form-group" [formGroup] = "passwordInput">
    <p class="col-xs-12">Passwords must contain at least 1 alpha & 1 numeric character, with a minimum length of 5 characters</p>
    <label for="password" class="col-xs-2 control-label">New Password</label>
    <div class="col-xs-10">
        <input  type="password" 
                class="form-control" 
                name="password" 
                formControlName="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
                required>
        <div class="text-danger" *ngIf="passwordInput.get('password').hasError('required') && passwordInput.get('password').touched">
        Password is required
        </div>
    </div>
</div>
<div class="form-group" [formGroup] = "passwordInput">
    <label for="password" class="col-xs-2 control-label">Confirm Password</label>
    <div class="col-xs-10">

        <input  type="password" 
                class="form-control" 
                name="confirm" 
                formControlName="confirm"
                validateEquality="password"
                required>

        <div class="text-danger" *ngIf="passwordInput.get('confirm').hasError('required') && passwordInput.get('confirm').touched">
        Password Confirm is required
        </div>
    </div>
</div>
  `
})
export class PasswordComponent {

  @Input() passwordInput: FormGroup;

  constructor() {}

  ngOnInit() {}

}
