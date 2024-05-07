import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {MatToolbar} from "@angular/material/toolbar";
import {StartComponent} from "../start/start.component";
import {RegistrierungComponent} from "../registrierung/registrierung.component";
import {KontaktComponent} from "../kontakt/kontakt.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatTabGroup,
    MatToolbar,
    StartComponent,
    MatTab,
    RegistrierungComponent,
    KontaktComponent,
    RouterLink,
    MatTabNav,
    MatTabLink,
    MatTabNavPanel,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor() {}

  navLinks = [
    { path: 'start', label: 'Start' },
    { path: 'registrierung', label: 'Registrierung' },
    { path: 'kontakt', label: 'Kontakt' },
  ];
}
