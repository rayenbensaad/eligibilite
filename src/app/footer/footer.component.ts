import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  submitted = false;
  newsletter = {
    email: '',
  };
  emailPattern = "^[A-Za-z-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  ngOnInit(): void {
  }


  onSubmit() {



    const data = {
      email: this.newsletter.email,

    };


    this.contactService.createNewsletter(data)
    .subscribe(
      response => {
        //console.log(response);
        this.submitted = true;
      },
      error => {
        //console.log(error);
      });

    }

    newContact() {
      this.submitted = false;
      this.newsletter = {
        email: '',
      };
    }


}
