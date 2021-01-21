import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Form } from 'src/app/models/Form';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  secondHalf = false;
  firstHalf = true;
  thirdHalf=false;
  model: NgbDateStruct;
  horaire;
  revenu;
  surface;
  formulaire : any;
  checkValidation=false;

  constructor(private formService : FormService) { }

  ngOnInit(): void {
  }

  switchSecondHalf(form: NgForm){
    this.formulaire = {
      nom_prenom :form.value.userName,
      code_postale :form.value.codePostale,
      num_tel :form.value.numTel,
      email :form.value.email,
      date_rappel :this.model.day+'/'+this.model.month+'/'+this.model.year,
    }
    console.log(this.formulaire)
    this.secondHalf=true;
    this.firstHalf=false;
  }

  onChangeHoraire(deviceValue) {
    console.log(deviceValue);
    this.horaire=deviceValue;
}

onHoverButton(form: NgForm) {
  console.log(this.checkValidation)
  if(form.value.userName == undefined || form.value.codePostale || form.value.numTel || form.value.email){
    this.checkValidation = true;
  }

}


onChangeRevenu(deviceValue) {
  console.log(deviceValue);
  this.revenu=deviceValue;
}

onChangeSurface(deviceValue) {
  console.log(deviceValue);
  this.surface=deviceValue;
}

  onSubmit(form: NgForm) {

    this.formulaire = {
      nom_prenom :this.formulaire.nom_prenom,
      code_postale :this.formulaire.code_postale,
      num_tel :this.formulaire.num_tel,
      email :this.formulaire.email,
      date_rappel :this.formulaire.date_rappel,
      isole :form.value.isoler,
      energie_chauffage :form.value.chauffage,
      nbr_personne :form.value.personnes,
      revenu_annuel :this.revenu,
      surface_isoler :this.surface,
    }

    console.log(this.formulaire)

    
    this.formService.create(this.formulaire)
    .subscribe(
      response => {
        console.log(response);
        this.secondHalf = false;
        this.thirdHalf= true;
      },
      error => {
        console.log(error);
      });

    }
}
