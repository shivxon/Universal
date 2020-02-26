import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewFormComponent} from './newform/newform.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {katex} from 'katex';
import { NgxQuillModule } from '@dimpu/ngx-quill'

import { QuillModule } from 'ngx-quill'

import { LayoutModule }       from '@angular/cdk/layout';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import{MatFormFieldModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MAT_DATE_LOCALE, MatNativeDateModule, NativeDateModule} from '@angular/material/core';
import {MatProgressBarModule,} from '@angular/material/progress-bar';
import {MatCardModule,} from '@angular/material/card';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule } from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {WeWorkComponent } from './we_work/wework.component'
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    WeWorkComponent,
    

  ],
  imports: [
    QuillModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    MatFileUploadModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatNativeDateModule,
    MatStepperModule,
    AgGridModule,
    MatCardModule,
    NgxQuillModule,
    LayoutModule,
    QuillModule,
    //katex
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
