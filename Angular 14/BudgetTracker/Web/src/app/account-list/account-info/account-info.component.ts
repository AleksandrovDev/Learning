import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'budget-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.less'],
})
export class AccountInfoComponent implements OnInit {
  id!: string;
  id$!: Observable<string>;
  paramsMap$: Observable<ParamMap> =this.activatedRoute.paramMap;
  idFromSnapshot!: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Avoid subscriptions because it can cause memory leak if you forgot to unsubscribe
  
    // this.activatedRoute.params.subscribe((params) => {
    //   this.id = params['id'];
    // });

    // Use streams with async pipe instead
    this.id$ = this.activatedRoute.params.pipe(
      map((params) => params['id'])
    )

    // ParamMap is better to use


    // snapshot will never update the value in the same view
    this.idFromSnapshot = this.activatedRoute.snapshot.params['id'];
  }
}
