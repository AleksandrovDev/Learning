import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

// Directives are similar to the components but they don't have templates
@Directive({
  selector: '[budgetHover]',
})
export class HoverDirective implements OnInit {
  @Input() color = 'tomato';

  @Input() budgetHover!: string; // to pass value like budgetHover=['green']

  constructor(
    private readonly element: ElementRef,
    // @Inject(DOCUMENT) private readonly document: Document
    private readonly renderer2: Renderer2
  ) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;

    // another way to change the color
    this.renderer2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }

  // to listen the event of the parent component
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'orange'
    );

    this.renderer2.setStyle(
      this.element.nativeElement,
      'color',
      this.budgetHover
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color,
    )
  }
}
