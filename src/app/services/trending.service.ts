import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _http : HttpClient) { }

  getTrending(){
    return this._http.get('http://localhost:3000/trending')
  }

  getContent(){
    return this._http.get('http://localhost:3000/content')
  }

  getContentById(id:any){
    return this._http.get('http://localhost:3000/content/' + id)
  }
}
