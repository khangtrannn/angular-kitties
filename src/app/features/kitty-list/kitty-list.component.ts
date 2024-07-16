import { Component, inject, OnInit, signal } from '@angular/core';
import { CatService } from '../../core/cat/cat.service';
import { Kitty } from '../../shared/models/kitty';
import { KittyCardSkeletonComponent } from './kitty-card-skeleton/kitty-card-skeleton.component';
import { KittyCardComponent } from './kitty-card/kitty-card.component';

@Component({
  selector: 'app-kitty-list',
  standalone: true,
  imports: [KittyCardComponent, KittyCardSkeletonComponent],
  templateUrl: './kitty-list.component.html',
  styleUrl: './kitty-list.component.scss',
})
export class KittyListComponent implements OnInit {
  kitties = signal<Kitty[]>([]);
  isLoading = signal(true);

  dummyKitty = {} as Kitty;

  #catService = inject(CatService);

  async ngOnInit() {
    const kitties = await this.#catService.getRandomCats();
    this.kitties.set(kitties);
    this.isLoading.set(false);
  }
}
