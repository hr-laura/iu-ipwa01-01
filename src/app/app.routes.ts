import { Routes } from '@angular/router';
import {KontaktComponent} from "./component/kontakt/kontakt.component";
import {RegistrierungComponent} from "./component/registrierung/registrierung.component";
import {StartComponent} from "./component/start/start.component";

export const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent },
  { path: 'registrierung', component: RegistrierungComponent },
  { path: 'start', component: StartComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
