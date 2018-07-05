import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material/';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule, 
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatBadgeModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
    ],
    exports: [
        CommonModule, 
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatBadgeModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
    ],
    providers: [],
})
export class MaterialModule {}