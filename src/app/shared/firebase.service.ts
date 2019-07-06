import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Cont} from "../controlers/controlers.component";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

interface CreateResponse {
	name: string
}

@Injectable({providedIn: 'root'})
export class FirebaseService {
	static url = 'https://plan-flat.firebaseio.com/controlers';

	constructor(private http: HttpClient) {
	}

	create(cont: Cont): Observable<Cont> {
		return this.http
			.post<CreateResponse>(`${FirebaseService.url}/${cont.title}.json`, cont)
			.pipe(
				map(resp => {
					console.log(resp);
					return { ...cont, id: resp.name };
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