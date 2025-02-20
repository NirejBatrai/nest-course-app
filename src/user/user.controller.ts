import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(private readonly globalHelperService: GlobalHelperService) {}

  @Get('/global') //localhost:3000/product/shared
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
