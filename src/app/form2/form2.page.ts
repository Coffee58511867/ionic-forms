import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})
export class Form2Page implements OnInit {

  regForm!: FormGroup;


  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email : ['',[ Validators.required,   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      name : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      surname : ['', Validators.required],
      date: ['', Validators.required],
      address : ['', Validators.required],
      // Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})'),  password pattern
      password : ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  register(){
    console.log(this.regForm.value);
  }

}
