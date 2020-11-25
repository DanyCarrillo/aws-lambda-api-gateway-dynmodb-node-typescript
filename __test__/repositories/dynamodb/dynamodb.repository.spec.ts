import { DynamodbRepository } from "../../../src/repositories/service/dynamodb/dynamodb";
import { IDynamodb } from "../../../src/repositories/entity/dynamodb/dynamodb";
import * as uuid from "uuid";
test("dynamodb save", () => {
  const document: IDynamodb = {
    TableName: "testDocument",
    Item: {
      id: uuid.v1(),
      data: {
        nombre: "CR90 corvette",
        modelo: "CR90 corvette",
        fabricante: "Corellian Engineering Corporation",
        costo_en_credito: "3500000",
        longitud: "150",
        velocidad_maxima_atmosfera: "950",
        tripulacion: "30-165",
        pasajeros: "600",
        capacidad_carga: "3000000",
        consumables: "1 year",
        calificacion_hiperimpulsor: "2.0",
        MGLT: "60",
        calse_nave_estelar: "corvette",
        pilotos: [],
        peliculas: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
        ],
      },
      createdAt: "2014-12-10T14:20:33.369000Z",
      updatedAt: "2014-12-20T21:23:49.867000Z",
    },
  };
  const db = new DynamodbRepository();
  db.save(document);
});
