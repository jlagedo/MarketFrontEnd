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
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
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
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule
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
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule
    ],
    providers: [],
})
export class MaterialModule {}