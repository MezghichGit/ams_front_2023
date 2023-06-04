import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://127.0.0.1:8080/providers/';

  basicToken:any = sessionStorage.getItem('basicToken');

  constructor(private Http: HttpClient) { }
  listProviders() {
    const headers = new HttpHeaders({ Authorization: this.basicToken});
    return this.Http.get(this.urlProviders, {headers});
  }

  deleteProvider(idProvider: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken});
    return this.Http.delete(this.urlProviders + idProvider, {headers})
  }
  updateProvider(provider: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken});
    return this.Http.put(this.urlProviders + provider['id'], provider, {headers});
  }


  createProvider(provider: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken});
    return this.Http.post(this.urlProviders, provider, {headers});
  }


  getProvider(id: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken});
    return this.Http.get(this.urlProviders + id, {headers})
  }
}
