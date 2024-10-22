import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 20000
  },
  {
    id: uuid(),
    name: 'Vegueta',
    power: 9500,
  },{
    id: uuid(),
    name: 'Picollo',
    power: 6500
  }
];

  addCharacter( character: Character ):void {
    const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push(newCharacter);

  }


  // onDeleteCharacter(index: number){

  //   let value = this.characters.length;
  //   this.characters.splice(index, 1);
  // }

  // Aqui la funcion filter lo que hace es devolver un nuevo arreglo en el cual el id,
  // que seleccionemos tiene que ser diferente, osea que no tiene que estar en el nuevo arreglo.
  // asi se va eliminando.
  deleteCharacterById(id: string): void{
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Documentacion del splice
// uuid es una dependencia externa la cual hay que instalarla y luego hay que instalar otra dependencia para typescript,
// que la especifica en el error de la declaracion de la importacion.
