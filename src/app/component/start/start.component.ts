import { Component } from '@angular/core';
import {MatTab} from "@angular/material/tabs";

@Component({
  selector: 'app-start',
  standalone: true,
    imports: [
        MatTab
    ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

}
