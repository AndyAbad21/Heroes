import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-items';
import { Transaction } from 'firebase/firestore';

@Directive({
  selector: '[appNgDropFile]'
})
export class NgDropFileDirective {
  @Output() mouseSobreElemento:EventEmitter<boolean>=new EventEmitter();
  
  @Input() archivos:FileItem[]=[];

  @HostListener('dragover',['$event'])
  public onDragOver(event:any){
    this._prevenirDetener(event);
    this.mouseSobreElemento.emit(true);
  }
  @HostListener('dragleave',['$event'])
  public onDragLeave(event:any){
    this.mouseSobreElemento.emit(false);
  }
  @HostListener('drop',['$event'])
  @HostListener('drop', ['$event'])
public onDrop(event: any) {
  this.mouseSobreElemento.emit(true);
  const transferencia = this._getTransferencia(event);
  if (!transferencia) {
    console.error('Error en la transferencia');
    return;
  }

  this._prevenirDetener(event);
  this._extraerArchivos(transferencia.files); // Cambié `transferencia.file` a `transferencia.files`

  this.mouseSobreElemento.emit(false);
}

  constructor() { }

  private _getTransferencia(event:any){
    return event.dataTransfer ? event.dataTransfer :event.originalEvent.dataTransfer;
  }
  
  private _prevenirDetener(event:Event){
    event.preventDefault();
    event.stopPropagation();   
  }

  private _extraerArchivos(listaArchivos: FileList | null) {
    if (!listaArchivos) {
      console.error('No se encontraron archivos en la lista');
      return;
    }
  
    const archivosArray = Array.from(listaArchivos); // Convertir FileList a un array
  
    for (const archivoTemporal of archivosArray) {
      if (this._archivoPuedeSerCargado(archivoTemporal)) {
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }
    console.log('Lista final de archivos', this.archivos);
  }
  
  
  

  private _archivoYaSeleccionado(nombreArchivo:string){
    for(const archivo of this.archivos){
      if(archivo.nombreArchivo === nombreArchivo){
        console.log('El archivo'+nombreArchivo+' ya esta seleccionado');
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo:string){
    return (tipoArchivo==='' || tipoArchivo===undefined)?false:tipoArchivo.startsWith('image');
  }
  
  private _archivoPuedeSerCargado(archivo:File):boolean{
    if(!this._archivoYaSeleccionado(archivo.name) && this._esImagen(archivo.type)){
      return true;
    }else{
      return false;
    }
  }

}
