import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  data: Date = new Date();


  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: [''],
    });
  }

  ngOnInit() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  onSubmit() {
    const data = {
      "data": {
        "firstName": this.myForm.value.firstName,
        "lastName": this.myForm.value.lastName,
        "email": this.myForm.value.email,
        "phone": this.myForm.value.phone,
        "message": this.myForm.value.message,
      }
    }
    this.apiService.addContact(data).subscribe(
      (response) => {
        this.myForm.reset()
        console.log('Record created successfully:', response);
      },
      (error) => {
        console.error('Error creating record:', error);
      }
    );
  }

}
