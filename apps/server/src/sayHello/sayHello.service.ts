import { Injectable } from '@nestjs/common';

@Injectable()
export class SayHelloService {
  sayHello(): string {
    // get random string from list
    const list = [
      'Olá',
      'Oi',
      'Tudo bem?',
      'Tudo bom?',
      'Como vai?',
      'E aí?',
      'Opa',
      'Ei',
      'E aí, tudo bem?',
      'E aí, tudo bem?',
      'E aí, tudo bom?',
      'E aí, tudo bom?',
    ];
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
}
