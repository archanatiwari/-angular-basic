import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	formValue: any;

	constructor() {}
	loginData = {
		username:'',
		password:''
	};

	loginForm: FormGroup;

	ngOnInit(): void {
	    this.loginForm = new FormGroup({
	      'username': new FormControl(this.loginData.username, [
	        Validators.required,
	      ]),
	      'password': new FormControl(this.loginData.password, [
	      	Validators.required,
	        Validators.minLength(4),
	      ])
	    });
	}

    get username() { 
    	return this.loginForm.get('username'); 
    }
    get password() { 
    	return this.loginForm.get('password'); 
    }

}
