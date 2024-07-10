import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonRow,
  IonButton,
  IonSearchbar
}

from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonItem,
    NgFor,
    NgClass,
    IonInput,
    IonLabel,
    FormsModule,
    IonRow,
    IonButton,
    IonSearchbar
  ],
})
export class Tab2Page {
  version: String = '';

  constructor() {}

  tableau = this.trierTableau(['ion-header', 'ion-toolbar', 'ion-title', 'ion-segment',
    'ion-button', 'ion-item', 'ion-list', 'ion-note', 'ion-avatar', 'ion-card']);
  // tableau: String[] = ['rouge', 'jaune', 'vert', 'bleu']
  tableauTrie: String[] = [];

  trierTableau(tableau: String[]): String[] {
    tableau.sort();
    return tableau;
  }

  fun(){
    this.tableau.push(this.version);
    this.tableau.sort();
    return this.tableau;
  }
}
