import { HttpAdapter } from '../interfaces/http-adapter.interface';

export class fetcAdapter implements HttpAdapter {
  get<T>(url: string): Promise<T> {
    throw new Error('method not implemented');
  }
}
