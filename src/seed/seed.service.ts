import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  async executeSeed() {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data: PokeResponse = await resp.json();

    return data;
  }
}
