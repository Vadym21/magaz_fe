import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
      return this.http.get('http://localhost:3000');
  }

  getOrders() {
    return this.http.get('http://localhost:3000/orders');
  }
}
