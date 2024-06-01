// app-status.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStatusService {
  private _isOpen = true;

  get isOpen(): boolean {
    return this._isOpen;
  }

  toggleIsOpen(): void {
    this._isOpen = !this._isOpen;
  }
}
