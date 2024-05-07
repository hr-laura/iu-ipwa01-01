import {Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {ModalData} from "../../model/ModalData";

@Component({
  selector: 'app-modal',
  standalone: true,
    imports: [
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle,
        NgIf
    ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData) {}

  datumHeute = new Date();
  datumHeuteAsString = this.datumHeute.toLocaleDateString();
  minuten = this.datumHeute.getMinutes().toString().length == 1 ? "0" + this.datumHeute.getMinutes() : this.datumHeute.getMinutes().toString();
  uhrzeit = this.datumHeute.getHours() + ":" + this.minuten;
}
