import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Cont} from "../controlers/controlers.component";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class FirebaseService {
	static url = 'https://plan-flat.firebaseio.com/controlers';

	constructor(private http: HttpClient) {
	}

	update(cont: Cont): Observable<Cont> {
		return this.http.put<Cont>(`${FirebaseService.url}/${cont.title}.json`, cont).pipe(
			map(resp => {
				return resp;
			})
		)
	}

	loadAll(): Observable<Cont[]> {
		return this.http.get<Cont>(`${FirebaseService.url}.json`)
			.pipe(
				map(resp => {
					let result = [];
					Object.keys(resp).map((key) => {
						result.push(resp[key])
					});

					return result;
				})
			)
	}
}