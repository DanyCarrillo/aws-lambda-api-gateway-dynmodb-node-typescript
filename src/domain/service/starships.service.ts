import { StarshipsRepository } from "../../repositories/service/startships.repository";
import { StarshipsModel } from "../model/starships.model";
import { ResultStarshipsModel } from "../model/result-starships.model";
import { StarshipsEntity } from "../../repositories/entity/starships.entity";
import { ResultStarshipsEntity } from "../../repositories/entity/result-starships.entity";

export class StarshipsService {
  private starshipsRepository = new StarshipsRepository();
  private result: StarshipsModel[] = [];
  public async findAll(): Promise<StarshipsModel[]> {
    let resultStarshipsModel: ResultStarshipsModel[] = [];
    const starshipsEntity: StarshipsEntity[] = await this.starshipsRepository.findAll();

    if (starshipsEntity) {
      this.result = starshipsEntity.map<StarshipsModel>((item) => {
        const resultStarshipsEntity =
          item.results && item.results.length > 0 ? item.results : [];
        const modelItem: StarshipsModel = {
          cantidad: item.count,
          siguiente: item.next,
          anterior: item.previous,
          resultados: this.getResultsStarships(resultStarshipsEntity),
        };
        return modelItem;
      });
    }
    return this.result;
  }

  public async save(body: any): Promise<boolean> {
    const response = await this.starshipsRepository.save(body);
    return response;
  }
  public async find(): Promise<any> {
    const response = await this.starshipsRepository.find();
    return response;
  }
  public async findOne(id: string): Promise<any> {
    const response = await this.starshipsRepository.findOne(id);
    return response;
  }

  private getResultsStarships(
    resultsStarships: ResultStarshipsEntity[]
  ): ResultStarshipsModel[] {
    let resultStarships: ResultStarshipsModel[] = [];
    resultStarships = resultsStarships.map<ResultStarshipsEntity>(
      (resultEntity) => {
        const resultStarshipsModel: ResultStarshipsModel = {
          nombre: resultEntity.name,
          modelo: resultEntity.model,
          fabricante: resultEntity.manufacturer,
          costo_en_credito: resultEntity.cost_in_credits,
          longitud: resultEntity.length,
          velocidad_maxima_atmosfera: resultEntity.max_atmosphering_speed,
          tripulacion: resultEntity.crew,
          pasajeros: resultEntity.passengers,
          capacidad_carga: resultEntity.cargo_capacity,
          consumables: resultEntity.consumables,
          calificacion_hiperimpulsor: resultEntity.hyperdrive_rating,
          MGLT: resultEntity.MGLT,
          calse_nave_estelar: resultEntity.starship_class,
          pilotos: resultEntity.pilots,
          peliculas: resultEntity.films,
          creado: resultEntity.created,
          editado: resultEntity.edited,
          url: resultEntity.url,
        };

        return resultStarshipsModel;
      }
    );
    return resultStarships;
  }
}
