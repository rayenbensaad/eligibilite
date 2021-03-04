import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { IsolationExterieurComponent } from './components/isolation-exterieur/isolation-exterieur.component';
import { IsolationInterieurComponent } from './components/isolation-interieur/isolation-interieur.component';
import { NosoffreComponent } from './components/nosoffre/nosoffre.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PompeChaleurComponent } from './components/pompe-chaleur/pompe-chaleur.component';
import { TousDroitsReservesComponent } from './components/tous-droits-reserves/tous-droits-reserves.component';
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
  {path: 'isolationInterieur',component: IsolationInterieurComponent},
  {path: 'faq',component: FaqComponent},
  {path: 'droits',component: TousDroitsReservesComponent},
  //{path: 'offre',component: NosoffreComponent},
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
