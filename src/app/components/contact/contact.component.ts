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
    nom_prenom: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;

  ngOnInit(): void {
  }


  onSubmit() {



    const data = {
      nom_prenom: this.contact.nom_prenom,
      email: this.contact.email,
      subject: this.contact.subject,
      message: this.contact.message,
    };

    
    this.contactService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });

    }

    newContact() {
      this.submitted = false;
      this.contact = {
        nom_prenom: '',
        email: '',
        subject: '',
        message: ''
      };
    }

    
}


