import { Controller, Get, Query } from '@nestjs/common';
import { SpeedService } from './speed.service';

@Controller('speed')
export class SpeedController {
  constructor(private readonly speedService: SpeedService) {}

  @Get('auto-increment')
  async testAutoIncrement(@Query('data') data: string): Promise<number> {
    return this.speedService.testAutoIncrement(data);
  }

  @Get('ulid')
  async testULID(@Query('data') data: string): Promise<number> {
    return this.speedService.testULID(data);
  }

  @Get('uuidv7')
  async testUUIDv7(@Query('data') data: string): Promise<number> {
    return this.speedService.testUUIDv7(data);
  }
}
