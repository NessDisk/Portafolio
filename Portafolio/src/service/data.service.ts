import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myVariable= new BehaviorSubject<string>('es');

  setVariable(value: string): void {
    this.myVariable.next(value);
  }

  getVariable() {
    return this.myVariable.asObservable();

    
  }


}