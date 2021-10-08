import {Evaluation} from "./Evaluation.model";

export interface Restaurant {
  id: number
  nom: string
  adresse: string
  evaluations: Evaluation[]
}
