import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Media} from './media/media';
import {Warenkorb} from './warenkorb/warenkorb';
import {Creative} from './creative/creative';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'media',
    component: Media
  },
  {
    path: 'warenkorb',
    component: Warenkorb
  },
  {
    path: 'creative',
    component: Creative
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
  ];
