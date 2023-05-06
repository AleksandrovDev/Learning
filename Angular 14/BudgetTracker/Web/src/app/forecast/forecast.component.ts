import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      forecastId: new FormControl({
        value: 2,
        disabled: true,
      }), // or you can use just ['']
      forecastedSum: [''],
      targetDate: [''],
      nestedForm: this.formBuilder.group({
        nestedField: [''],
      }),
      tasks: this.formBuilder.array([
        this.newTask(),
      ]),
    });
  }

  addForecast() {
    console.log(this.forecastForm.value);
    console.log(this.forecastForm.getRawValue()); // allows to see disabled value too
  }

  addTask() {
    this.tasks.push(
      this.newTask()
    );
  }

  private newTask(): any {
    return this.formBuilder.group({
      definition: [''],
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
