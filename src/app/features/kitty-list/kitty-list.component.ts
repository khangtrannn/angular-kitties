import { Component, inject, OnInit, signal } from '@angular/core';
import { CatService } from '../../core/cat/cat.service';
import { Kitty } from '../../shared/models/kitty';
import { KittyCardComponent } from './kitty-card/kitty-card.component';

@Component({
  selector: 'app-kitty-list',
  standalone: true,
  imports: [KittyCardComponent],
  templateUrl: './kitty-list.component.html',
  styleUrl: './kitty-list.component.scss',
})
export class KittyListComponent implements OnInit {
  kitties = signal<Kitty[]>([]);

  #catService = inject(CatService);

  async ngOnInit() {
    const kitties = await this.#catService.getRandomCats();
    this.kitties.set(kitties);
  }
}
