const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const port = 8095;


var app = express()
 
app.use(cors())

app.listen(port, () => {
  console.log("Server running on port 8095");
 });

 app.get("/getMassIndex", (req: any, res: any, next: any) => {
  
    console.log("Se recibe request de nuevo")

    //Verificamos campos vacios
    var weight = req.query.weight == 'NaN' ? 0 : req.query.weight;
    var height = req.query.height == 'NaN' ? 0 : req.query.height;

    console.log(`Se reciben los parametros de estatura: ${height} y masa: ${weight}`)

    if (weight == 0 || height == 0){

      //Retorno error

      res.status(401);
      res.json({messages:"ERROR, parametros erroneos o faltantes", peso: 0, estatura: 0, bodyMass: 0, weightType: "No aplica"});
      console.error("Ha ocurrido un error")
      return res;
     

    }else{

      var weightLevel:string;

      var IMC = (weight) / ((height / 100) * (height / 100))

      if(IMC < 18.5){

        weightLevel = "Bajo peso"

      }else if(IMC >= 18.5 && IMC < 25.0){

        weightLevel = "Peso Normal"

      }else if(IMC >= 25.0 && IMC < 30.0){
      
        weightLevel = "Sobrepeso"

      }else{

        weightLevel = "Obesidad"

      }

      res.status(200);
      res.json({messages:"OK", peso: weight, estatura: height, bodyMass: IMC, weightType: weightLevel});

      console.log(`Operacion exitosa, Datos: ${height}, ${weight}, ${IMC} `)

      return res

    }

 });