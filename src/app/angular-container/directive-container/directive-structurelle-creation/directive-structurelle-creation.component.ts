import { Component, OnInit } from '@angular/core';
import { AuthDirectiveService } from 'src/app/shared/services/Menus/Angular/auth-directive.service';

@Component({
  selector: 'app-directive-structurelle-creation',
  templateUrl: './directive-structurelle-creation.component.html',
  styleUrls: ['./directive-structurelle-creation.component.css']
})
export class DirectiveStructurelleCreationComponent implements OnInit {

  constructor(private authService: AuthDirectiveService) { }

  ngOnInit(): void {
  }
  
  public login(roleSelect: string) {
    this.authService.user.next({ role: roleSelect });
  }

}
