import { ResultStarshipsEntity } from "./result-starships.entity";

export interface StarshipsEntity {
  count?: number;
  next?: string;
  previous?: string | null;
  results?: ResultStarshipsEntity[];
}
