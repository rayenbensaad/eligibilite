import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BlogComponent } from './components/blog/blog.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';


const routes: Routes = [
  {path: 'acceuil',component: AcceuilComponent}, 
  {path: 'blog',component: BlogComponent},
  {path: 'DetailBlog/:id',component: DetailBlogComponent},
  { path: '',   redirectTo: '/acceuil', pathMatch: 'full' }, // redirect to `first-component`
 // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
