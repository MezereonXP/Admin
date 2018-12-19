import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule, MatGridListModule, MatListModule, MatCheckboxModule, MatDialogModule, 
  MatTooltipModule, MatSelectModule, MatDividerModule, MatChipsModule, MatTabsModule, MatMenuTrigger, 
  MatMenuModule, MatExpansionModule, MatCardModule, MatTableModule, MatAutocompleteModule } from '@angular/material';
  import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SetCycleComponentComponent } from './set-cycle-component/set-cycle-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SetCycleComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
