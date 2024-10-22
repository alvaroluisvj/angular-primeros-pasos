import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input('listaCaracteres')
  public characterList: Character[] = [{
    // @Input()
    // public characterList: Character[] = [{
    // id: 'khggg',
    name: 'Trucks',
    power: 20
  },
];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?: string ): void {
    if(!id) return;
    this.onDeleteId.emit(id);
  }
}
/**
 * @Input('listaCaracteres')
  public characterList: Character[] = [{

  el nombre de listaCaracteres es opcional
  si queremos lo dejamos vacio, pero deberia de tener el mismo nombre
  que en el archivo html que le esta enviando los datos.
 */
