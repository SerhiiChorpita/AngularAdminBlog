import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostRequest, PostResponse } from '../../app/interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = environment.BACKEND_URL;
  private api = { posts: `${this.url}/posts` }

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.api.posts);
  }

  create(post: PostRequest): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.api.posts, post)
  }

  update(post: PostRequest, id: number): Observable<PostResponse> {
    return this.http.patch<PostResponse>(`${this.api.posts}/${id}`, post)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.posts}/${id}`)
  }

}
