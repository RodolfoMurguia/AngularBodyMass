var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8095;
var app = express();
app.use(cors());
app.listen(port, function () {
    console.log("Server running on port 8095");
});
app.get("/getMassIndex", function (req, res, next) {
    //Verificamos campos vacios
    var weight = req.query.weight || 0;
    var height = req.query.height || 0;
    if (weight === 0 || height === 0) {
        //Retorno error
        res.status(401);
        res.json({ messages: "ERROR, parametros erroneos o faltantes", peso: 0, estatura: 0, bodyMass: 0, weightType: "No aplica" });
        return res;
    }
    else {
        var weightLevel;
        var IMC = (weight) / ((height / 100) * (height / 100));
        if (IMC < 18.5) {
            weightLevel = "Bajo peso";
        }
        else if (IMC >= 18.5 && IMC < 25.0) {
            weightLevel = "Peso Normal";
        }
        else if (IMC >= 25.0 && IMC < 30.0) {
            weightLevel = "Sobrepeso";
        }
        else {
            weightLevel = "Obesidad";
        }
        res.status(200);
        res.json({ messages: "OK", peso: weight, estatura: height, bodyMass: IMC, weightType: weightLevel });
        return res;
    }
});
