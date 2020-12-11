import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// burada observable ' a gerek yok. Çünkü veriyi http ile asenkron almıyoruz şimdilik

export class LoggingService {

  constructor() { }
  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
