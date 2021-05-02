import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contact = {
    nomprenom: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  validateEmail = true;
  ngOnInit(): void {
  }


  onSubmit() {



    const data = {
      nom_prenom: this.contact.nomprenom,
      email: this.contact.email,
      subject: this.contact.subject,
      message: this.contact.message,
    };

    
    this.contactService.create(data)
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
      this.contact = {
        nomprenom: '',
        email: '',
        subject: '',
        message: ''
      };
    }

    
}


