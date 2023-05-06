import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export class Forecast {
  accountId!: string;
  forecastedSum!: number;
  targetDate!: Date;
}
@Component({
  selector: 'budget-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.less'],
})
export class ForecastComponent implements OnInit {
  forecastForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forecastForm = this.formBuilder.group({
      forecastId: new FormControl(''), // or you can use just ['']
      forecastedSum: [''],
      targetDate: [''],
    });
  }
}
