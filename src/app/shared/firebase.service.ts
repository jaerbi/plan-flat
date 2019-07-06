import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface Controlers {
	visibility: string
	live_tv: string
}

@Injectable({providedIn: 'root'})
export class FirebaseService {
	static url = 'https://plan-flat.firebaseio.com/controlers';

	constructor(private http: HttpClient) {
	}


}