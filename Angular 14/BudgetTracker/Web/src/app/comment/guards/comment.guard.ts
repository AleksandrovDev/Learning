import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Comments } from '../comment';
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root',
})
export class CommentGuard implements Resolve<Comments[]> {
  constructor(private readonly commentService: CommentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Comments[] | Observable<Comments[]> | Promise<Comments[]> {
    return this.commentService.getComments();
  }
}
