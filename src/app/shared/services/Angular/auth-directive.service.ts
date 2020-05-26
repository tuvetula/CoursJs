import { BehaviorSubject } from 'rxjs';

export class AuthDirectiveService {
  
  public user:BehaviorSubject<any> = new BehaviorSubject({role:'client'});
  
}