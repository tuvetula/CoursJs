import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-creation-observable',
  templateUrl: './creation-observable.component.html',
  styleUrls: ['./creation-observable.component.css']
})
export class CreationObservableComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public subscription1: Subscription;
  constructor() { }

  ngOnInit(): void {
    //Observable
    const obs = Observable.create((observer: Observer<any>) => {
      let data = 2;
      observer.next(data);
      data = 3;
      observer.next(data);
      data = 4;
      observer.next(data);
      setTimeout(() => {
        observer.next(data + 2);
        observer.complete();
        observer.next(data + 4); //Ne va pas s'afficher car la methode complete a été appellée et le flux est coupé.
      }, 2000);
    });

    this.subscription = obs.subscribe({
      next: (x: string) => console.log("Sub next: " + x),
      complete: () => console.log("Sub complete"),
      error: (x: string) => console.log("Sub error: " + x)
    });

    this.subscription1 = obs.subscribe(
      (data: string) => console.log("Sub1 next: " + data),
      (error: string) => console.log("Sub1 error: " + error)
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

}
