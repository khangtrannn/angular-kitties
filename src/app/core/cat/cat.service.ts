import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CatResponse } from './cat.model';

const CAT_API_URL = 'https://api.thecatapi.com/v1';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  #http = inject(HttpClient);

  getRandomCats() {
    return lastValueFrom(
      this.#http.get<CatResponse[]>(
        `${CAT_API_URL}/images/search?limit=12&has_breeds=1`
      )
    );
  }
}
