import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-introduction-subjects',
  templateUrl: './introduction-subjects.component.html',
  styleUrls: ['./introduction-subjects.component.css']
})
export class IntroductionSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Subject
    const subj = new Subject<number>();
    const s1 = subj.subscribe((x: number) => {
      console.log("nextSubject S1: " + x);
    });
    const s2 = subj.subscribe((x: number) => {
      console.log("nextSubject S2: " + x);
    });
    subj.next(2);
    s1.unsubscribe();
    subj.next(3);
  }

}
