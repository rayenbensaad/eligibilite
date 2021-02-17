import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { IsolationExterieurComponent } from './components/isolation-exterieur/isolation-exterieur.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PompeChaleurComponent } from './components/pompe-chaleur/pompe-chaleur.component';
import { TraveauxComponent } from './components/traveaux/traveaux.component';


const routes: Routes = [
  {path: 'accueil',component: AcceuilComponent}, 
  {path: 'blog',component: BlogComponent},
  {path: 'DetailBlog/:id',component: DetailBlogComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'isolationExterieur',component: IsolationExterieurComponent},
  {path: 'PompeChaleur',component: PompeChaleurComponent},
  {path: 'travaux',component: TraveauxComponent},

  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
