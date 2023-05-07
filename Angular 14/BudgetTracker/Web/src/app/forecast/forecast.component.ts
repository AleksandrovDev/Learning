import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  get tasks() {
    return this.forecastForm.get('tasks') as FormArray;
  }

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forecastForm = this.formBuilder.group({
      forecastId: new FormControl(
        {
          value: 2,
          disabled: true,
        },
        {
          validators: [Validators.required],
        }
      ), // or you can use just ['']
      forecastedSum: ['', [Validators.min(1), Validators.required]],
      targetDate: ['', [Validators.required]],
      nestedForm: this.formBuilder.group({
        nestedField: new FormControl('', {
          validators: [Validators.required],
        }),
      }),
      tasks: this.formBuilder.array([this.newTask()]),
      termsAndConditions: new FormControl(false, {
        validators: [Validators.requiredTrue],
      }),
    });

    this.getForecastData();
  }

  getForecastData() {
    this.forecastForm.patchValue({
      forecastId: '3',
      forecastedSum: 100,
      targetDate: '',
      nestedForm: {
        nestedField: ''
      },
      tasks: [],
      termsAndConditions: false,
    })
  }

  addForecast() {
    console.log(this.forecastForm.value);
    console.log(this.forecastForm.getRawValue()); // allows to see disabled value too
    this.forecastForm.reset({
      forecastId: 'reset', // Pass default values here
    });
  }

  addTask() {
    this.tasks.push(this.newTask());
  }

  private newTask(): any {
    return this.formBuilder.group({
      definition: ['', {
        validators: [Validators.required]
      }],
      priority: [''],
    });
  }

  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  addCurrentSum() {
    this.forecastForm.addControl('currentSum', new FormControl(''));
  }

  deleteCurrentSum() {
    if (this.forecastForm.get('currentSum')) {
      this.forecastForm.removeControl('currentSum');
    }
  }
}
