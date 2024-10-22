import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  // Example of value string and number
  public name: string = "ironman";
  public age:    number = 45;

  // Example of method get
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  // Example of method
  getHeroeDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = "Spiderman";
  }
  changeAge():void {
    this.age = 23;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
