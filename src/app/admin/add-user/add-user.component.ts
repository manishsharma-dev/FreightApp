import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  cardTitle = "";
  form!: FormGroup;
  formSubmitted : boolean = false;
  passwordType : string = "password";
  corporateList : corporteModel[] = [];
  nameReg = new RegExp(`[a-zA-Z][a-zA-Z ]+$`);
  emailReg = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  constructor(private fb: FormBuilder,private _appService : AppService,private router : Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [""],
      userName: ["", [Validators.required, Validators.pattern(this.nameReg)]],
      email: ["", [Validators.required, Validators.maxLength(50), Validators.pattern(this.emailReg)]],
      passwordVisible : [false],
      password: ["", [Validators.required]],
      confirm_password : ["",[Validators.required]],
      corporate: ["", [Validators.required]]
    }, { validator: this.passwordErrorValidator });

    this.form.get('passwordVisible').valueChanges.subscribe(val => {
      this.passwordType = val ? 'text' : 'password';
    });

    if (this.router.url == "/admin/add-user") {
        this.cardTitle = "Add";        
    }
    else{
      this.cardTitle = "Edit";
      this._appService.getUsers().subscribe((res : any) => {
        const userData = res.find(user => user.user_id == this.router.url.split('/')[this.router.url.split('/').length - 1]);
          this.form.patchValue({
            user_id : userData.user_id ? userData.user_id : "" ,
            userName : userData.user_name ? userData.user_name : "",
            email : userData.email ? userData.email : "",
            password : userData.password ? userData.password : "",
            corporate : userData.corporate ? userData.corporate : ""
          })
      })
    }
  }

  passwordErrorValidator: any = (control: FormGroup): any => {
    const password = control.get('password');
    const repeatPassword = control.get('confirm_password');
    return password?.value != repeatPassword?.value ? { 'passwordError': true } : null;
  };

  goBack() {
    this._appService.goBack();
  }

  addAdmin(){

  }

}


interface corporteModel {
  id : number;
  name : string;
}