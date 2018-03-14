import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Post } from "../../models/post";

@Injectable()
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(environment.apiUrlPosts);
  }
}
