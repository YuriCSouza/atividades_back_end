import { Shopping } from './shopping.interface';
export declare class ShoppingService {
    private items;
    addItem(item: Shopping): Shopping;
    findAll(): Shopping[];
}
