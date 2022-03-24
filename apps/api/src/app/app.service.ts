import { Injectable } from '@nestjs/common';

import { Todo } from '@todo-list/shared-types'


@Injectable()
export class AppService {
  private todos:Todo[] = []

  getData(): Todo[] {
    return this.todos;
  }

  add(group: string, text: string): void {
    this.todos.push({
      id: this.todos.length,
      group,
      text,
      completed: false,
      visible: true,
    })
  }

  deleteTask(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  deleteGroup(group: string): void {
    this.todos = this.todos.filter( (todo) => !(todo.group === group) )
  }

  setCompleted(id: number, completed: boolean): void {
    this.todos = this.todos.map( (todo) => ({
      ...todo,
      completed: todo.id === id ? completed : todo.completed,
    })
    );
  }

  setHidden(group: string, visible: boolean): void {
    this.todos = this.todos.map( (todo) => ({
      ...todo,
      visible: todo.group === group ? visible : todo.visible,
    })
    );
  }


}
