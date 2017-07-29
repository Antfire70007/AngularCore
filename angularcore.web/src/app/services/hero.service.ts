import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {

 constructor(private _httpService: Http) { }
 test() :Promise<string[]>{
    return this._httpService.get('/api/values')
     .toPromise()
     .then(values => {
          return   values.json() as string[];
      })
         .catch(this.handleError);;
 }
        private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
