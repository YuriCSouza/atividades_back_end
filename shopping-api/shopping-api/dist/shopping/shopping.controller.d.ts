import { ShoppingService } from './shopping.service';
import type { Shopping } from './shopping.interface';
export declare class ShoppingController {
    private readonly shoppingService;
    constructor(shoppingService: ShoppingService);
    create(item: Shopping): Shopping;
    findAll(): Shopping[];
}
