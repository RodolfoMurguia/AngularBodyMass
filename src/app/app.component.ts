import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora de Masa Corporal';
  formGroup;
  BMI: number = 0
  BodyType:string = ''
  

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      weight:'',
      height:'',
    });
  }

  

  onSubmit(formData:any) {

    //Inicio mi proceso
    var h:number = parseFloat(formData.height)

    var w:number = parseFloat(formData.weight)

    //Armamos y enviamos peticion a nuestro proceso

    axios.get( 'http://localhost:8095/getMassIndex?weight=' + w + '&height=' + h)
      .then((res)=>{

        console.log(res);

        this.BMI = res.data.bodyMass.toFixed(2)
        this.BodyType = res.data.weightType

        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Su Indice de masa corporal es: ' + this.BMI + ' y su condicion es de: ' + this.BodyType + '.'
        })

      })
      .catch(err=>{

        console.log(err);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingresa tus datos de masa y estatura',
        })
      
      })  
  }
}