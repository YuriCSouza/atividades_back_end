import { Injectable } from '@nestjs/common';
import { Shopping } from './shopping.interface';

@Injectable()
export class ShoppingService {
  private items: Shopping[] = [];
  addItem(item: Shopping): Shopping {
    this.items.push(item);
    return item;
  }
  findAll(): Shopping[] {
    return this.items;
  }
}
