import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NosoffreComponent } from './components/nosoffre/nosoffre.component';
import { TraveauxComponent } from './components/traveaux/traveaux.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';








@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ContactComponent,
    BlogComponent,
    AboutusComponent,
    NosoffreComponent,
    TraveauxComponent,
    LoaderComponent,
    NavbarComponent,
    QuizComponent,
    DetailBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
