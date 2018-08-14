import {Directive,
				HostBinding,
				HostListener,
				Input,
				TemplateRef,
				ViewContainerRef} from '@angular/core';
import {style} from '@angular/animations';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') openUp() {
    this.isOpen = !this.isOpen;
  }
}
