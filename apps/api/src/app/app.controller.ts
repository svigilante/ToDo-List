import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  create(@Body() { group, text }: {group: string, text: string}) {
    return this.appService.add(group, text);
  }

  @Post('setCompleted')
  setCompleted(@Body() { id, completed }: {id: number, completed: boolean} ) {
    return this.appService.setCompleted(id, completed);
  }

  @Post('setVisible')
  setVisible(@Body() { group, visible }: {group: string, visible: boolean} ) {
    return this.appService.setHidden(group, visible);
  }

  @Post('delGroup')
  delGroup(@Body() { group }: {group: string} ) {
    return this.appService.deleteGroup(group);
  }

  @Post('delTask')
  delTask(@Body() { id }: {id: number} ) {
    return this.appService.deleteTask(id);
  }
}
