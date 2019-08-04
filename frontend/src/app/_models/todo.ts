export class Todo {
  id: number;
  title: string;
  description: string;
  event_time: string;

  constructor(title: string, description: string, event_time: string, id?: number) {
    this.title = title;
    this.description = description;
    this.event_time = event_time;
    this.id = id;
  }
}
