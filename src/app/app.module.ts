import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostersComponent } from './posters/posters.component';
import { PosterComponent } from './posters/poster/poster.component';
import { PostersService } from "./common/posters.service";
import { PosterListComponent } from './posters/poster-list/poster-list.component';
import { PosterDetailComponent } from './posters/poster-detail/poster-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostersComponent,
    PosterComponent,
    PosterListComponent,
    PosterDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
