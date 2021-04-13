import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private baseUrl: string = 'http://localhost:3000/posts';

    constructor(private _httpClient: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(this.baseUrl);
    }

    createPost(post: Post): Observable<Post> {
        return this._httpClient.post<Post>(this.baseUrl, post);
    }
}
