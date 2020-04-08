import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService.service';

@Component({
  selector: 'app-directive-structurelle-creation',
  templateUrl: './directive-structurelle-creation.component.html',
  styleUrls: ['./directive-structurelle-creation.component.css']
})
export class DirectiveStructurelleCreationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public login(roleSelect: string) {
    this.authService.user.next({ role: roleSelect });
  }

}
