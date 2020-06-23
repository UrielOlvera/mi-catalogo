import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../models';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL='https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=>(this.messageService.add('Autos Obtenidos')))
    );
  }

  getAuto_ID(auto: Automovil): Observable<any>{
    return this.http.get<any>(`${this.autosURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('getAuto_ID')),
      tap((result)=>{
        console.log(result);
        this.messageService.add(`Auto Obtenido. ID: ${result.data._id}`);
      })
    )
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap((result)=>{
        console.log(result);
        this.messageService.add(`Auto Actualizado. ID: ${result.data._id}`);
      })
    )
  }

  addAuto(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosURL, auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result)=>{
        console.log(result);
        this.messageService.add(`Auto Agregado. ID: ${result.data._id}`);
      })
    )
  }

  deleteAuto(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAuto')),
      tap((result)=>{
        console.log(result);
        this.messageService.add(`Auto Eliminado. ID: ${result.data._id}`);
      })
    )
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      this.messageService.add(`${operation} falló: ${error.message}`);
      return of(result as T);
    }
  }
}
