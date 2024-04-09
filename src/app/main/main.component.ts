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
    this.personnages.push(new Personnage('Ahri', 1, 'ahri.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Caitlyn', 1, 'caitlyn.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Cho\'Gath', 1, 'chogath.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Darius', 1, 'darius.jpg', 'DPS', 'AD / AP'));
    this.personnages.push(new Personnage('Kobuko', 1, 'kobuko.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Garen', 1, 'garen.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Jax', 1, 'jax.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Kha\'Zix', 1, 'khazix.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Kog\'Maw', 1, 'kogmaw.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Malphite', 1, 'malphite.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Rek\'Sai', 1, 'reksai.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Sivir', 1, 'sivir.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Yasuo', 1, 'yasuo.jpg', 'Tank', 'Tank'));

    /*2 cost*/
    this.personnages.push(new Personnage('Aatrox', 2, 'aatrox.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Gnar', 2, 'gnar.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Janna', 2, 'janna.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Kindred', 2, 'kindred.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Lux', 2, 'lux.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Neeko', 2, 'neeko.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Qiyana', 2, 'qiyana.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Riven', 2, 'riven.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Senna', 2, 'senna.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Shen', 2, 'shen.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Teemo', 2, 'teemo.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Yorick', 2, 'yorick.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Zyra', 2, 'zyra.jpg', 'DPS', 'AP'));

    /*3 cost*/
    this.personnages.push(new Personnage('Alune', 3, 'alune.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Amumu', 3, 'amumu.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Aphelios', 3, 'aphelios.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Bard', 3, 'bard.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Diana', 3, 'diana.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Illaoi', 3, 'illaoi.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Soraka', 3, 'soraka.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Tahm Kench', 3, 'tahmkench.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Thresh', 3, 'thresh.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Tristana', 3, 'tristana.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Volibear', 3, 'volibear.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Yone', 3, 'yone.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Zoé', 3, 'zoe.jpg', 'DPS', 'AP'));

    /*4 cost*/
    this.personnages.push(new Personnage('Annie', 4, 'annie.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Ashe', 4, 'ashe.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Galio', 4, 'galio.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Kai\'Sa', 4, 'kaisa.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Kayn', 4, 'kayn.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Lee Sin', 4, 'leesin.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Lillia', 4, 'lillia.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Morgana', 4, 'morgana.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Nautilus', 4, 'nautilus.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Ornn', 4, 'ornn.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Sylas', 4, 'sylas.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Syndra', 4, 'syndra.jpg', 'DPS', 'AP'));

    /*5 cost*/
    this.personnages.push(new Personnage('Azir', 5, 'azir.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Hwei', 5, 'hwei.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Irelia', 5, 'irelia.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Lissandra', 5, 'lissandra.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Rakan', 5, 'rakan.jpg', 'DPS', 'AP'));
    this.personnages.push(new Personnage('Sett', 5, 'sett.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Udyr', 5, 'udyr.jpg', 'Tank', 'Tank'));
    this.personnages.push(new Personnage('Wukong', 5, 'wukong.jpg', 'DPS', 'AD'));
    this.personnages.push(new Personnage('Xayah', 5, 'xayah.jpg', 'DPS', 'AD'));
  }

  genererPersonnageAleatoire() {
    const index = Math.floor(Math.random() * this.personnages.length);
    this.personnageAleatoire = this.personnages[index];
    this.personnageChoisi = true;
  }
}
