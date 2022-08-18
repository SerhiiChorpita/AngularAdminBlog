import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BlogsComponent } from './admin/admin/blogs/blogs.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'blogs', component: BlogsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'admin/blogs' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
