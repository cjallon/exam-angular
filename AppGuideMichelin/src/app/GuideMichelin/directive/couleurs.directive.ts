import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appCouleurs]'
})
export class CouleursDirective {

  constructor(private el: ElementRef) { }

  @Input("appListeElementsCouleur")
  set choix(value: number){
    if (value>2) {
      this.el.nativeElement.style.color = 'yellow';
    }else {
      this.el.nativeElement.style.color = 'grey';
    }
  }
}
