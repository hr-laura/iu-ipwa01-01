import {AfterViewInit, Component} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatDialog,
} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-registrierung',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelect,
    MatOption,
    NgIf,
    NgForOf
  ],
  templateUrl: './registrierung.component.html',
  styleUrl: './registrierung.component.css'
})
export class RegistrierungComponent implements AfterViewInit{

  public readonly abholung: string = "abholung";
  public readonly ort: string = "ort";
  public readonly plzVerein: string = "63110";
  public readonly ortVerein: string = "Rodgau";

  public uebergabe: string = this.abholung;

  isLinear = true;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
    fourthCtrl: ['', Validators.required],
    fifthCtrl: ['', this.plzNahAnVereinValidator()]
  });
  secondFormGroup = this._formBuilder.group({
    kleidungsartControl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    krisengebietControl: ['', Validators.required],
  });

  isPlzNahAnVerein(postalCode: string): boolean {
    const plzVereinFirstTwoNumbers = this.plzVerein.substring(0, 2);
    return postalCode.substring(0, 2) == plzVereinFirstTwoNumbers;
  }

  kleidungsarten: String[] = ['Accessoires','Hosen','Jacken','Kleider/Einteiler','Oberteile','Pullover','Röcke','Schuhe','T-Shirts/Tops','Unterteile'];

  krisengebiete: String[] = ['Afrika','Syrien','Türkei','Ukraine'];

  onKleidungsartSelect(event: any) {
    this.secondFormGroupControls['kleidungsartControl'].setValue(event.value);
  }

  onKrisengebietSelect(event: any) {
    this.thirdFormGroupControls['krisengebietControl'].setValue(event.value);
  }

  plzNahAnVereinValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {

      console.log(control.value);
      console.log('${this.isPlzNahAnVerein(control.value)}');
      return this.isPlzNahAnVerein(control.value) ? null : { '!isPlzNahAnVerein': { value: control.value } };
    };
  }

   registrieren() {
    if (this.uebergabe == this.abholung) {
      this.dialog.open(ModalComponent, {
        data: {
          vorname: this.firstFormGroup.value.firstCtrl,
          name: this.firstFormGroup.value.secondCtrl,
          adresse: this.firstFormGroup.value.thirdCtrl,
          stadt: this.firstFormGroup.value.fourthCtrl,
          plz: this.firstFormGroup.value.fifthCtrl,
          artKlamotten: this.secondFormGroup.value.kleidungsartControl,
          krisengebiet: this.thirdFormGroup.value.krisengebietControl,
        },
      });
    } else {
      console.log(this.firstFormGroup.value.fifthCtrl)
      this.dialog.open(ModalComponent, {
        data: {
          vorname: null,
          name: null,
          adresse: null,
          stadt: this.ortVerein,
          plz: null,
          artKlamotten: this.secondFormGroup.value.kleidungsartControl,
          krisengebiet: this.thirdFormGroup.value.krisengebietControl,
        },
      });
    }
    this.dialog.afterAllClosed.subscribe(() => {
      this.secondFormGroup.reset({kleidungsartControl: ''});
      this.thirdFormGroup.reset({krisengebietControl: ''});
      this.firstFormGroup.reset({fifthCtrl: '', firstCtrl: '', secondCtrl: '', thirdCtrl: '', fourthCtrl: ''});
    });
  }

  get secondFormGroupControls(): { [p: string]: AbstractControl } {
    return this.secondFormGroup.controls;
  }

  get thirdFormGroupControls(): { [p: string]: AbstractControl } {
    return this.thirdFormGroup.controls;
  }
}
