import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message); // push est une méthode native JS qui fait partie de l'interface des Arrays
  }

  clear() {
    this.messages = [];
  }
}