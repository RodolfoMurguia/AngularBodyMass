import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora de Masa Corporal';
  formGroup;

  //const http = require('http');

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      weight: '0.0',
      height: ''
    });
  }

  onSubmit(formData:any) {
    //console.log("Hola Ke ase")

    //Inicio mi proceso
    var h:number = formData.height

    var w:number = parseFloat(formData.weight)

    //console.log(h,w)

    //armamos el request

    axios.get( 'http://localhost:8095/getMassIndex?weight=' + w + '&height=' + h)
      .then((res)=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    
  }
}