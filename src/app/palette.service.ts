import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Palette } from './palette';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  apiUrl: string = 'http://api.tkusaka.com/palette_api.php?api_key=5b324c790cf7b';

  private handleError (error:HttpErrorResponse) {
    return throwError ('An error occured.');
  }
  
  getPalettes(palette_id?: number): Observable<Palette[]> {
    if (palette_id) {
      return this.http.get<Palette[]>(this.apiUrl + `?palette_id=${palette_id}`).pipe( catchError(this.handleError));
    }
    return this.http.get<Palette[]>(this.apiUrl).pipe( catchError(this.handleError));
  }

  constructor(
    private http: HttpClient,
  ) { }
}
