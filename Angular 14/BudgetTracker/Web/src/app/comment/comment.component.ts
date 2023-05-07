import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Comments } from './comment';

@Component({
  selector: 'budget-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();

  comment$ = this.route.data.pipe(map((data) => data['comments']));

  comments: Comments[] = [];

  constructor(
    private readonly commentService: CommentService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.data.subscribe((data) => {
    //   this.comments = data['comments'];
    //   console.log(this.comments);
    // });
  }
}
