import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';

const appRoutes = [
  {
    path: '',
    component: HomepageComponent
  },

  {
    path: 'post',
    component: PostComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
