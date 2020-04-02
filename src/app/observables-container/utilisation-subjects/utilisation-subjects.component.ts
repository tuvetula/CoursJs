import { Component, OnInit } from '@angular/core';
import { ReplaySubject, AsyncSubject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-utilisation-subjects',
  templateUrl: './utilisation-subjects.component.html',
  styleUrls: ['./utilisation-subjects.component.css']
})
export class UtilisationSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //BehaviorSubject
    const behaviorSubj = new BehaviorSubject<number>(0);
    behaviorSubj.next(2);
    const bs1 = behaviorSubj.subscribe((x: number) => {
      console.log("nextBehaviorSubject BS1: " + x);
    });
    const bs2 = behaviorSubj.subscribe((x: number) => {
      console.log("nextBeahaviorSubject BS2: " + x);
    });
    behaviorSubj.next(3);
    bs1.unsubscribe();
    behaviorSubj.next(4);
    bs2.unsubscribe();

    //ReplaySubject
    const replaySubject = new ReplaySubject(2); // garder en mémoire les deux dernières valeurs émises
    replaySubject.subscribe(valeur => console.log("Observer 1 : " + valeur)); // Log 1 puis 2 puis 3
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.subscribe(valeur => console.log("Observer 2 : " + valeur)); // Log 2 puis 3

    const replaySubject1 = new ReplaySubject(10, 500);
    setTimeout(() => replaySubject1.next(1), 300);
    setTimeout(() => replaySubject1.next(2), 400);
    setTimeout(() => replaySubject1.next(3), 600);
    setTimeout(() => replaySubject1.next(4), 700);
    setTimeout(() => {
      replaySubject1.subscribe((v: number) =>
        console.log("ReplayObserverTimeout : " + v)
      );
    }, 1000); //Affiche les 2 dernières valeurs car les valeurs ne doivent pas être vieilles de plus de 500ms.

    //AsyncSubject
    const asyncSubject = new AsyncSubject();
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.subscribe(v => console.log("observerAsyncSubject : " + v)); //Affiche 3 car c'est la dernière valeur avant le complete
    asyncSubject.next(3);
    asyncSubject.complete();
  }

}
