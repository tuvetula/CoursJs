import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserModel } from 'src/app/shared/models/Angular/user.model';


@Component({
  selector: 'app-operateurs-pipes-rxjs',
  templateUrl: './operateurs-pipes-rxjs.component.html',
  styleUrls: ['./operateurs-pipes-rxjs.component.css']
})
export class OperateursPipesRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Pipe Rxjs
    const subjPipe = new BehaviorSubject<UserModel>({
      name: "Lenny",
      age: 18,
      email: "lenny.marcant@gmail.com"
    });
    const sp1 = subjPipe
      .pipe(
        filter((user: UserModel) => { return user.name == "Lenny";}),
        map((user: UserModel) => {
          return user.email;
        })
      )
      .subscribe((email: string) => {
        console.log("PipeSubject: ", email);
      });
  }

}
