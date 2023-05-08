import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandle extends ErrorHandler {
  override handleError(error: any): void {
    console.log(error);
  }
}