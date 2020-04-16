import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ListMenuLeftComponent } from 'src/app/shared/components/NavBarList/list-menu-left/list-menu-left.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        ListMenuLeftComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ListMenuLeftComponent
    ]
})

export class ListMenuLeftModule {}