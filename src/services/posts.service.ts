import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants as constants } from 'src/constants/constants';
import { GlobalFunctions as globals } from 'src/constants/globals';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(filter: any) {
    const params = globals.generateParams(filter);
    const url = `${constants.baseURL}${constants.posts}?${params}`
    return this.http.get(url);
  }

  addPost(body: any) {
    const url = `${constants.baseURL}${constants.posts}`;
    return this.http.post(url, body, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  updatePost(body: any, id: any) {
    const url = `${constants.baseURL}${constants.posts}/${id}`;
    return this.http.put(url, body, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  deletePost(id: any) {
    const url = `${constants.baseURL}${constants.posts}/${id}`
    return this.http.delete(url);
  }
}
