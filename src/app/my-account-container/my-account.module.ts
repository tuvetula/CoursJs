import { NgModule } from "@angular/core";
import { MyAccountContainerComponent } from './my-account-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyAccountRoutingModule } from './my-account-routing.module';

@NgModule({
    declarations:[MyAccountContainerComponent],
    imports: [CommonModule,
        FormsModule,
        RouterModule,
        MyAccountRoutingModule],
    providers:[]
})

export class MyAccountModule {}