import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin  } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  // GET request
  getTopicList(): Observable<any[]> {
    const url = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty'
    return this.http.get<any[]>(url).pipe(map(items => items.slice(0, 20)))
  }

  getTopicDetail(id: number): Observable<any[]> {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    return this.http.get<any[]>(url);
  }

  getTopicDetails(ids: Array<number>) : Observable<any[]> {
    const observables: Observable<any>[] = ids.map(id => this.getTopicDetail(id));
    return forkJoin(observables);

  }
}
