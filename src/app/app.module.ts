import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StoreModule } from '@ngrx/store';
import {
  addNewListReducer,
  addNewTaskReducer,
} from './reducers/addList.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      list: addNewListReducer,
      task: addNewTaskReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
