// src/app/services/auth-event.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEventService {
  private authStatusSource = new Subject<boolean>();
  authStatus$ = this.authStatusSource.asObservable();

  setAuthStatus(status: boolean): void {
    this.authStatusSource.next(status);
  }
}
