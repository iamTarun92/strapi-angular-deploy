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
  siteKey = "6LcvkFkpAAAAABxI33Ph8XtC_YTV7BKGME2ghjxH"
  selectedFile: any



  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      recaptcha: [null, Validators.required],
      message: [''],
    });
  }

  ngOnInit() {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.remove('navbar-transparent');
  }
  ngOnDestroy() {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];

  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0]
  }

  onSubmit() {
    const formData = new FormData()
    formData.append('files', this.selectedFile)
    this.apiService.fileUpload(formData).subscribe(response => {
      const imageId = response[0]?.id
      const data = {
        "data": {
          "firstName": this.myForm.value.firstName,
          "lastName": this.myForm.value.lastName,
          "email": this.myForm.value.email,
          "phone": this.myForm.value.phone,
          "message": this.myForm.value.message,
          "cv": imageId
        }
      }
      this.apiService.addContact(data).subscribe(
        (response) => {
          this.myForm.reset()
          alert('Record created successfully');
        },
        (error) => {
          console.error('Error creating record:', error);
        }
      );
    });
  }

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
