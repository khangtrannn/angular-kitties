import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Kitty } from '../../shared/models/kitty';

const CAT_API_URL = 'https://api.thecatapi.com/v1';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  #http = inject(HttpClient);

  getRandomCats() {
    return lastValueFrom(
      this.#http.get<Kitty[]>(
        `${CAT_API_URL}/images/search?limit=18&has_breeds=1&size=med`,
        {
          headers: {
            'content-type': 'application/json',
            'x-api-key': import.meta.env['NG_APP_CAT_API_KEY'],
          },
        },
      ),
    );
  }
}
