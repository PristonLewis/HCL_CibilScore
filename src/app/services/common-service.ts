import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable()

export class CommonService {
    constructor(private http: HttpClient) { }

    /* get call */
    public getList(url: string): Observable<any> {
        return this.http.get(url).pipe(
            retry(1)
        );
    }
}
