import { Source } from './source';

export class SourceResponse {

  constructor(){
      this.payload = [];
  }
    status: string;
    payload: Source[];
}