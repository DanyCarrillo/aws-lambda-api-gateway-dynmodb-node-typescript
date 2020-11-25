import { ResultStarshipsModel } from "./result-starships.model";

export interface StarshipsModel {
  cantidad?: number;
  siguiente?: string;
  anterior?: string | null;
  resultados?: ResultStarshipsModel[];
}
