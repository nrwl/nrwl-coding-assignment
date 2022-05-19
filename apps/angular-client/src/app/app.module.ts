import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [AppComponent, TicketsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: TicketsComponent },
        { path: '**', redirectTo: '/' },
      ],
      {
        initialNavigation: 'enabledBlocking',
      }
    ),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
