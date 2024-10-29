import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bot-template-form-controls',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-form-controls.component.html',
  styleUrls: ['./template-form-controls.component.css'],
})
export class TemplateFormControlsComponent implements OnInit {
  textInput: string = '';
  numericInput: string = '';
  stringInput: string = '';
  numericSelect: number = 0;
  checkboxInput: boolean = false;
  radioInput: number | null = null;

  selectOptions: any[] = [
    { text: 'Option One', value: 1 },
    { text: 'Option Two', value: 2 },
  ];
  constructor() {}

  ngOnInit(): void {}

  getType(value: any) {
    if (value === null || value === undefined) return '';

    console.log('ns', this.numericSelect);
    return typeof value;
  }
}
