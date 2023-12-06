import { Component, importProvidersFrom } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/auth/auth.service';
import { Auth } from '../Models/auth/auth';
// import { AppConfig } from '../config/AppConfig';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any;
  router: any;
  constructor(fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      // console.log("ghhhj")
      return;
    }else{
      // console.log("hihi")
    }
    // console.log(123);
    this.authService.login(
      new Auth(this.form.value.username, this.form.value.password)
    );
    
  }
}
