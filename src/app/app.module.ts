import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CnodeService } from './services/cnode.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { UserComponent } from './user/user.component';
import { TopicAddComponent } from './topic-add/topic-add.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'topic',
    component: HomeComponent
  },
  {
    path: 'topic/:id',
    component: TopicComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'topic-add',
    component: TopicAddComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TopicComponent,
    UserComponent,
    TopicAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CnodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
