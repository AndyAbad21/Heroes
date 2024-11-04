import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFile]'
})
export class NgDropFileDirective {
  @Output() mouseSobreElemento:EventEmitter<boolean>=new EventEmitter();
  @HostListener('dragover',['$event'])
  public onDragOver(event:any){
    this.mouseSobreElemento.emit(true);
  }
  @HostListener('dragover',['$event'])
  public onDragLeave(event:any){
    this.mouseSobreElemento.emit(false);
  }
  constructor() { }

}
