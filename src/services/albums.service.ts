import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants as constants } from '../constants/constants';
import { GlobalFunctions as globals } from '../constants/globals';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbumIds(filter: any) {
    const params = globals.generateParams(filter);
    const url = `${constants.baseURL}${constants.albums}?${params}`
    return this.http.get(url);
  }

  getPhotos(filter: any) {
    const params = globals.generateParams(filter);
    const url = `${constants.baseURL}${constants.photos}?${params}`
    return this.http.get(url);
  }
}
