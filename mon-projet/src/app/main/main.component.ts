import { Component } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  personnages: Personnage[] = [];
  personnageAleatoire: Personnage | null = null;
  personnageChoisi: boolean = false;

  constructor() {
    
    /*1 cost*/
    this.personnages.push(new Personnage('Ahri', 1, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Caitlyn', 1, 'kratos.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Cho\'Gath', 1, 'nathan-drake.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Darius', 1, 'ellie.jpg', 'DPS', 'AD / AP'));
    this.personnages.push(new Personnage('Kobuko', 1, 'ellie.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Garen', 1, 'ellie.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Jax', 1, 'ellie.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Kha\'Zix', 1, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Kog\'Maw', 1, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Malphite', 1, 'ellie.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Rek\'Sai', 1, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Sivir', 1, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Yasuo', 1, 'ellie.jpg', 'Tank', 'Tank'));

    /*2 cost*/
    this.personnages.push(new Personnage('Aatrox', 2, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Gnar', 2, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Janna', 2, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Kindred', 2, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Lux', 2, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Neeko', 2, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Qiyana', 2, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Riven', 2, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Senna', 2, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Shen', 2, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Teemo', 2, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Yorick', 2, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Zyra', 2, 'aloy.jpg', 'DPS', 'AP'));

    /*3 cost*/
    this.personnages.push(new Personnage('Alune', 3, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Amumu', 3, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Aphelios', 3, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Bard', 3, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Diana', 3, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Illaoi', 3, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Soraka', 3, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Tahm Kench', 3, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Thresh', 3, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Tristana', 3, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Volibear', 3, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Yone', 3, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Zoé', 3, 'aloy.jpg', 'DPS', 'AP'));

    /*4 cost*/
    this.personnages.push(new Personnage('Annie', 4, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Ashe', 4, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Galio', 4, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Kai\'Sa', 4, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Kayn', 4, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Lee Sin', 4, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Lillia', 4, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Morgana', 4, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Nautilus', 4, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Ornn', 4, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Sylas', 4, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Syndra', 4, 'aloy.jpg', 'DPS', 'AP'));

    /*5 cost*/
    this.personnages.push(new Personnage('Azir', 5, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Hwei', 5, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Irelia', 5, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Lissandra', 5, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Rakan', 5, 'aloy.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Sett', 5, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Udyr', 5, 'aloy.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Wukong', 5, 'aloy.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Xayah', 5, 'aloy.jpg', 'DPS', 'AD'));


  }

  genererPersonnageAleatoire() {
    const index = Math.floor(Math.random() * this.personnages.length);
    this.personnageAleatoire = this.personnages[index];
    this.personnageChoisi = true;
  }
}
