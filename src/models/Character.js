import axios from 'axios';
const COMICLY_API_ROUTE = 'http://localhost:3010/character';

class Character {
  static show(characterName) {
    let request =
      axios.get(`${COMICLY_API_ROUTE}/:id`)
  }
}
