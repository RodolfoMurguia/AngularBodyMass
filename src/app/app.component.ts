import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora de Masa Corporal';
  formGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      weight: '0.0',
      height: ''
    });
  }

  onSubmit(formData:any) {
    console.log("Hola Ke ase")

    //Inicio mi proceso
    var h:number = formData.height

    var w:number = parseFloat(formData.weight)

    console.log(h,w)
  }
}