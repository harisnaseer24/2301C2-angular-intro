import { Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutSectionComponent
    }
];
