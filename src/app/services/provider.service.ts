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
    return this.Http.delete(this.urlProviders + idProvider)
  }
  updateProvider(provider: any) {
    return this.Http.put(this.urlProviders + provider['id'], provider);
  }


  createProvider(provider: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken});
    return this.Http.post(this.urlProviders, provider, {headers});
  }


  getProvider(id: any) {
    return this.Http.get(this.urlProviders + id)
  }
}
