import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './modules/home/home.component';
import { LectureOneComponent } from './modules/lectures/lecture-one/lecture-one.component';
import { LectureTwoComponent } from './modules/lectures/lecture-two/lecture-two.component';
import { LibsComponent } from './modules/libs/libs.component';
import { LecturesComponent } from './modules/lectures/lectures.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { NotFoundComponent } from './modules/lectures/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lectures',
    component: LecturesComponent,
  },
  {
    path: 'lectures/lecture-one',
    component: LectureOneComponent,
  },
  {
    path: 'lectures/lecture-two',
    component: LectureTwoComponent,
  },
  {
    path: 'libs',
    component: LibsComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },

  {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
