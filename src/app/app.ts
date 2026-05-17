import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Gep = {
  nev: string;
  tipus: string;
  napiAr: number;
  elerheto: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nev: string = '';
  telefon: string = '';
  email: string = '';

  gepek: Gep[] = [
    { nev: 'Bosch fúrógép', tipus: 'Fúrógép', napiAr: 3000, elerheto: true },
    { nev: 'Makita flex', tipus: 'Sarokcsiszoló', napiAr: 2500, elerheto: true },
    { nev: 'Kärcher mosó', tipus: 'Magasnyomású mosó', napiAr: 5000, elerheto: false },
    { nev: 'Hilti vésőgép', tipus: 'Vésőgép', napiAr: 6000, elerheto: true },
    { nev: 'Stihl láncfűrész', tipus: 'Láncfűrész', napiAr: 4500, elerheto: true },
    { nev: 'DeWalt csavarbehajtó', tipus: 'Csavarbehajtó', napiAr: 2800, elerheto: true },
    { nev: 'Einhell betonkeverő', tipus: 'Betonkeverő', napiAr: 7000, elerheto: false },
    { nev: 'Black & Decker porszívó', tipus: 'Porszívó', napiAr: 2200, elerheto: true }
];

  kivalasztottGep: Gep | null = null;
  napok: number = 1;

  kivalaszt(gep: Gep) {
    this.kivalasztottGep = gep;
    this.napok = 1;
  }

  kolcsonoz() {

    if (this.nev.trim() === '') {
      alert('A név megadása kötelező!');
      return;
    }

    if (this.kivalasztottGep && this.kivalasztottGep.elerheto) {
      this.kivalasztottGep.elerheto = false;

      alert(
        'Sikeres kölcsönzés!\n\n' +
        'Név: ' + this.nev + '\n' +
        'Telefon: ' + this.telefon + '\n' +
        'Email: ' + this.email
      );
    }
  }

  visszahoz(gep: Gep) {
    gep.elerheto = true;
  }

  vegosszeg(): number {

    if (!this.kivalasztottGep) {
      return 0;
    }

    return this.kivalasztottGep.napiAr * this.napok;
  }
}