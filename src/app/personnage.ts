export class Personnage {
    nom: string;
    niveau: number;
    lienImage: string;
    role: string;
    type: string;
  
    constructor(nom: string, niveau: number, lienImage: string, role: string, type: string) {
      this.nom = nom;
      this.niveau = niveau;
      this.lienImage = lienImage;
      this.role = role;
      this.type = type;
    }
  }