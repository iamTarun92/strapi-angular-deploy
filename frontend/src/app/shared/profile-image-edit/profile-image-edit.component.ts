import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-image-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-image-edit.component.html',
  styleUrls: ['./profile-image-edit.component.scss']
})
export class ProfileImageEditComponent implements OnInit {
  profileUrl = './assets/img/logo.png'
  constructor() { }

  ngOnInit(): void {
  }
  imageUpload(e: any) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      this.profileUrl = event.target.result;
    };
  }

}
