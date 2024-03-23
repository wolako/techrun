import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  
  contactForm!: FormGroup;
  successMessage!: string;
  errorMessage!: string;

  constructor(private formb: FormBuilder){}
  
  
  ngOnInit(): void {
    this.contactForm = this.formb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
      this.successMessage = "Merci de nous avoir contacter, nous vous reviendrons dans un bref délai !";
      this.errorMessage = "";

      setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
      }, 3000);
      this.contactForm.reset();
    }else{
      console.log("formulaire invalide, veuillez vérifier les champs");
      this.successMessage = "";
      this.errorMessage = "Le formulaire est invalide. Veuillez vérifier les champs.";
      
    }
  }
}
