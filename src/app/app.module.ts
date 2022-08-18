import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BlogsComponent } from './admin/admin/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    AdminComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
