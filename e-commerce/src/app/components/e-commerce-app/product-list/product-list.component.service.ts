import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,  } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class BookService {
 
    private baseUrl = 'http://localhost:3002/livros';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) { }

    readBook() {
        return this.http.get(this.baseUrl);
    }

}