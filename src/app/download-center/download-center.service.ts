import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadCenterService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<object> {
    return this._http.get('assets/json/data.json');
  }
}
