const fs = require('fs');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

let page = 10;
const limit = 100;

for (let i = 1; i <= page; i++) {
  (async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=true&size=small&order=asc&page=${i}&api_key=live_gXyGSC7JujNZ7Roz1QtwSmxe0LrlARgWEw3jqZqkVhNCjNam3GaKBTLgrg8SdAj9`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      for (const cat of json) {
        const stream = fs.createWriteStream(`./public/cats/${cat.id}.jpg`);
        const { body } = await fetch(cat.url);
        await finished(Readable.fromWeb(body).pipe(stream));
        console.log(`Downloaded: ${cat.id}`);
      }
    } catch (error) {
      console.error('Failed at page: ', i);
    }
  })();
}
