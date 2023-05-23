import { Component } from '@angular/core';

interface Animal {
  nombAnimal: string;
  accesorio: string;
  precio: number;
}

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  animal: Animal[] = [
    { nombAnimal: 'Perro', accesorio: 'correa', precio: 4000 },
    { nombAnimal: 'Perro', accesorio: 'casa', precio: 20000 },
    { nombAnimal: 'Gato', accesorio: 'bola', precio: 2500 },
    { nombAnimal: 'Conejo', accesorio: 'chaleco', precio: 3000 },
    { nombAnimal: 'Hamster', accesorio: 'Bola de plastico', precio: 5000 }
  ];

  filtro: string = '';
  animalesFiltrados: Animal[] = [];

  filtroAnimal(event: any) {
    this.filtro = event.target.value;
    this.animalesFiltrados = this.filtrarAnimales(this.filtro);
  }

  filtrarAnimales(filtro: string): Animal[] {
    if (!filtro || filtro === '') {
      return this.animal;
    }

    return this.animal.filter(animal => animal.nombAnimal === filtro);
  }
}



