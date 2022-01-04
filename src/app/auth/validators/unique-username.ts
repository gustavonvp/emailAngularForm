import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, FormControl } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
        constructor(private http: HttpClient) {}
        
        validate = (control: FormControl) =>  {
            const { value } = control;
            return this.http.post<any>('https://api.angular-email.com/auth/username', {
                username: value
            })
            .pipe(
                map(value => {
                    if(value.available){
                        return null;
                    }    
                }),
            catchError((err) => {
                console.log(err);
                if(err.message.username) {
                    return of({nonUniqueUsername: true})
                }
                return of({ noConnection: true });
            })
            );
        }
}
