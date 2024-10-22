import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0

  }

  emitCharacter(): void {
    // console.log(this.character);

    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    // Resetea los campos de texto para cuando se haga submit se limpien.
    this.character = {name: '', power: 0 };
    // this.character.name = '';
    // this.character.power = 0;

  }

}
// NOTA Importarte
// el selector es el  nombre que representa a la clase cuando se exporta.

