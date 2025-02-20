import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'Hellow from product service';
  }
  productFunc2() {
    return {
      name: 'nil',
      age: 21,
      hobby: 'boxing',
    };
  }
}
