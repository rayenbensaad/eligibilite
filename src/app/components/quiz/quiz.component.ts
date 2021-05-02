import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Form } from 'src/app/models/Form';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  emailPattern = "^[A-Za-z-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobNumberPattern = /^[1679]\d{8}$/;
  codePostalPattern = "^[0-9]{5}$";

  validateEmail = true

  secondHalf = false;
  firstHalf = true;
  thirdHalf = false;
  lastStep = false;
  point=false;

  model: NgbDateStruct;
  horaire;
  revenu;
  surface;
  formulaire: any;
  checkValidation = false;
  firstBTN = true;
  SecondBTN = true;

  fullForm = {
    logement: '',
    energie_chauffage: '',
    isole: [],
    surface_ITE: '',
    surface_ITI: '',
    surface_PAC: '',
    nombre_pieces_PAC: '',
    PACcomblesNumber: '',
    combles: '',
    surface_combles: '',
    surfaceCave: '',
    surfaceGarage: '',
    surface_vide_sanitaire: '',
    hauteur_vide_sanitaire:'',
    lieu_maison: '',
    nbr_personne: '',
    revenu_annuel:'',
    code_postale: '',
    commune: '',
    nom_prenom: '',
    num_tel: '',
    email: '',
    date_rappel:''

  }
  firstStepFormulaire = {
    logement: '',
    chauffage: '',
    isole: [],
  };
  secondStepFormulaire = {
    ITE: '',
    ITI: '',
    PACSurface: '',
    PACNumber: '',
    PACcomblesNumber: '',
    combles: '',
    comblesSurface: '',
    surfaceCave: '',
    surfaceGarage: '',
    surfaceVideSanitaire: '',
    hauteur_vide_sanitaire:'',
    situe: '',
    personnes: '',
    revenu_annuel:''
  };


  thirdStepFormulaire = {
    codePostale: '',
    commune: '',
    nom_prenom: '',
    numTel: '',
    email: '',
    date_rappel:'',
  };

  isITE = false;
  isITI = false;
  isCave = false;
  isComble = false;
  isGarage = false;
  isSanitaire = false;
  isPac = false;

  sizeCard=false;
  codePstalSaisie=false;



  constructor(private formService: FormService) { }

  ngOnInit(): void {

  }
  clickPoint(){

    this.point= true;
   // console.log(this.firstStepFormulaire.logement)
  }
  hover1Btn() {
    if (this.firstStepFormulaire.logement !== '' && this.firstStepFormulaire.chauffage !== '') {

      this.firstBTN = false
    }

  }

  // ismobNumberPattern(number){
  //  const  mobNumberPattern = /^0[1679]\d{8}$/;
  //  return mobNumberPattern.test(this.mobNumberPattern);
  // }
  switchSecondHalf() {


   //console.log(this.firstStepFormulaire)
    this.secondHalf = true;
    this.firstHalf = false;
    this.thirdHalf = false;
    this.lastStep = false;

    for (let index = 0; index < this.firstStepFormulaire.isole.length; index++) {
      if (this.firstStepFormulaire.isole[index] === 'ITE') {
        this.isITE = true;
      }
      else if (this.firstStepFormulaire.isole[index] === 'ITI') {
        this.isITI = true;
      }
      else if (this.firstStepFormulaire.isole[index] === 'Sous-sol/cave') {
        this.isCave = true;
      }
      else if (this.firstStepFormulaire.isole[index] === 'Camble') {
        this.isComble = true;
      }
      else if (this.firstStepFormulaire.isole[index] === 'Garage') {
        this.isGarage = true;
      }
      else if (this.firstStepFormulaire.isole[index] === 'Vide Sanitaire') {
        this.isSanitaire = true;
      }
      else if (this.firstStepFormulaire.isole[index] === 'PAC') {
        this.isPac = true;
      }
      // console.log(
      //   'ite' + this.isITE,
      //   'iti' + this.isITI,
      //   'isCave' + this.isCave,
      //   'isComble' + this.isComble,
      //   'isGarage' + this.isGarage,
      //   'isSanitaire' + this.isSanitaire,
      //   'isPac' + this.isPac,
      // )

    }
    if(this.firstStepFormulaire.isole.length>2){
      this.sizeCard=true;
      //console.log(this.sizeCard)
    }
  }

  hoverThirdStep(){
    //console.log(this.codePstalSaisie)
    //console.log(parseInt(this.thirdStepFormulaire.codePostale))
    if(parseInt(this.thirdStepFormulaire.codePostale)<10000 && parseInt(this.thirdStepFormulaire.codePostale)>99999 &&  this.thirdStepFormulaire.codePostale != null)
    {
      this.codePstalSaisie= true;
    }
    //console.log(this.codePstalSaisie)
  }

  hover2Btn() {
    //console.log(this.SecondBTN)
    if ((this.isITE === true && this.secondStepFormulaire.ITE !== '') ||
      (this.isITI === true && this.secondStepFormulaire.ITI !== '') ||
      (this.isCave === true && this.secondStepFormulaire.surfaceCave !== '') ||
      (this.isComble === true && this.secondStepFormulaire.combles !== '') ||
      (this.isGarage === true && this.secondStepFormulaire.surfaceGarage !== '') ||
      (this.isPac === true && this.secondStepFormulaire.PACSurface !== '') ||
      (this.isSanitaire === true && this.secondStepFormulaire.surfaceVideSanitaire !== '') ||
      (this.secondStepFormulaire.situe !== '') && (this.secondStepFormulaire.personnes !== '')

    ) {
      this.SecondBTN = false;
      //console.log(this.SecondBTN)
    }


  }



  switchThirdStep() {

    //console.log(this.secondStepFormulaire)
    this.secondHalf = false;
    this.firstHalf = false;
    this.thirdHalf = true;
    this.lastStep = false;
  }
  checkValue($event) {
    //console.log($event.srcElement.checked)
    if ($event.srcElement.checked === true) {
      this.firstStepFormulaire.isole.push($event.target.value);
    } else if ($event.srcElement.checked === false) {
      let index = this.firstStepFormulaire.isole.indexOf($event.target.value);
      this.firstStepFormulaire.isole.splice(index, 1);
    }

    //console.log(this.firstStepFormulaire.isole)

  }
  switchLastStep() {
    //console.log(this.thirdStepFormulaire)


    this.fullForm = {
      logement: this.firstStepFormulaire.logement,
      energie_chauffage: this.firstStepFormulaire.chauffage,
      isole: this.firstStepFormulaire.isole,
      
      surface_ITE: this.secondStepFormulaire.ITI,
      surface_ITI: this.secondStepFormulaire.ITI,
      surface_PAC: this.secondStepFormulaire.PACSurface,
      nombre_pieces_PAC: this.secondStepFormulaire.PACNumber,
      PACcomblesNumber: this.secondStepFormulaire.PACcomblesNumber,
      combles: this.secondStepFormulaire.combles,
      surface_combles: this.secondStepFormulaire.comblesSurface,
      surfaceCave: this.secondStepFormulaire.surfaceCave,
      surfaceGarage: this.secondStepFormulaire.surfaceGarage,
      surface_vide_sanitaire: this.secondStepFormulaire.surfaceVideSanitaire,
      hauteur_vide_sanitaire:this.secondStepFormulaire.hauteur_vide_sanitaire,
      lieu_maison: this.secondStepFormulaire.situe,
      nbr_personne: this.secondStepFormulaire.personnes,
      revenu_annuel:this.secondStepFormulaire.revenu_annuel,
      code_postale: this.thirdStepFormulaire.codePostale,
      commune: this.thirdStepFormulaire.commune,
      nom_prenom: this.thirdStepFormulaire.nom_prenom,
      num_tel: this.thirdStepFormulaire.numTel,
      email: this.thirdStepFormulaire.email,
      date_rappel: this.thirdStepFormulaire.date_rappel,
    }

    //console.log(this.fullForm);
    this.formService.create(this.fullForm)
      .subscribe(
        response => {
         // console.log(response);
          this.secondHalf = false;
          this.firstHalf = false;
          this.thirdHalf = false;
          this.lastStep = true;
        },
        error => {
          //console.log(error);
        });

  }

  onSurfaceCave(surfaceCaveValue) {
   // console.log(surfaceCaveValue);
    this.secondStepFormulaire.surfaceCave = surfaceCaveValue;
  }
  onSurfaceGarages(surfaceGarageValue) {
   // console.log(surfaceGarageValue);
    this.secondStepFormulaire.surfaceGarage = surfaceGarageValue;
  }
  onSurfaceVideSanitaire(surfaceVideSanitaireValue) {
    this.secondStepFormulaire.surfaceVideSanitaire = surfaceVideSanitaireValue;
  }
  onDateRappel(dateRappel) {
    //console.log(dateRappel);
    this.thirdStepFormulaire.date_rappel = dateRappel;
  }

  onChangeRevenu(deviceValue) {
    //console.log(deviceValue);
    this.secondStepFormulaire.revenu_annuel = deviceValue;
  }

  onChangeSurface(deviceValue) {
    //console.log(deviceValue);
    this.surface = deviceValue;
  }

  onSubmit(form: NgForm) {

    this.formulaire = {
      nom_prenom: this.formulaire.nom_prenom,
      code_postale: this.formulaire.code_postale,
      num_tel: this.formulaire.num_tel,
      email: this.formulaire.email,
      date_rappel: this.formulaire.date_rappel,
      isole: form.value.isoler,
      energie_chauffage: form.value.chauffage,
      nbr_personne: form.value.personnes,
      revenu_annuel: this.revenu,
      surface_isoler: this.surface,
    }

   // console.log(this.formulaire)


    this.formService.create(this.formulaire)
      .subscribe(
        response => {
          //console.log(response);
          this.secondHalf = false;
          this.thirdHalf = true;
        },
        error => {
          //console.log(error);
        });

  }
}
