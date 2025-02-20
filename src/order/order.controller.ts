import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly globalservice: GlobalHelperService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/global') //localhost:3000/product/shared
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
