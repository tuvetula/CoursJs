import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserFirestoreModel } from "src/app/shared/models/User/current-user.model";
import { UserCrudService } from "src/app/shared/services/User/user-crud.service";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { FormGroup, FormBuilder } from "@angular/forms";
registerLocaleData(localeFr, "fr");

@Component({
  selector: "app-admin-users",
  templateUrl: "./admin-users.component.html",
  styleUrls: ["./admin-users.component.css"],
})
export class AdminUsersComponent implements OnInit {
  public users$: Observable<UserFirestoreModel[]>;
  public numberOfUsers: number;
  public numberOfSubscribe$: Observable<number>;

  @ViewChild('filterFormDiv') filterFormDiv: ElementRef;
  public showFilterFormDiv: boolean;

  public filterForm: FormGroup;
  constructor(
    private userCrudService: UserCrudService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.users$ = this.userCrudService.getUsers().pipe(
      tap(data => this.numberOfUsers = data.length)
    );
    this.numberOfSubscribe$ = this.userCrudService.getNumberOfSubscribe();
    this.filterForm = this.fb.group({
      statut: "",
      sort: "",
      search: "",
    });
  }
  public toggleButton(
    field: string,
    event: HTMLInputElement,
    user: UserFirestoreModel
  ) {
    if (
      confirm(
        'Etes-vous sûr de vouloir modifier le statut "' +
          field +
          '" de ' +
          user.name +
          " " +
          user.firstName +
          "?"
      )
    ) {
      this.userCrudService
        .modifyUserDocument(field, event.checked, user.uid)
        .catch(() => {
          alert("Erreur: Le statut n'a pas été modifié!");
          event.checked = !event.checked;
        });
    } else {
      event.checked = !event.checked;
    }
  }

  public displayFilterFormDiv(){
    this.filterFormDiv.nativeElement.classList.toggle('showFilters');
    this.showFilterFormDiv = !this.showFilterFormDiv;
  }
  public submit() {
    const statut: string = this.filterForm.value.statut;
    const sort: string = this.filterForm.value.sort;
    const search: string = this.filterForm.value.search;
    this.users$ = this.userCrudService.getUsers().pipe(
      map((datas: UserFirestoreModel[]) => {
        let dataReturn = datas;
        if (statut && statut.length) {
          dataReturn = dataReturn.filter((data) => data[statut] === true);
        }
        if (search && search.length) {
          dataReturn = dataReturn.filter(
            (data) =>
              data.name.toLowerCase().includes(search.trim().toLowerCase()) ||
              data.firstName.toLowerCase().includes(search.trim().toLowerCase())
          );
        }
        if (sort && sort.length){
          dataReturn = dataReturn.sort((a,b)=>{
            if(a[sort] > b[sort]){
              return 1;
            } else if (a[sort] < b[sort]){
              return -1;
            }
          })
        }
        return dataReturn;
      })
    );
  }
}
