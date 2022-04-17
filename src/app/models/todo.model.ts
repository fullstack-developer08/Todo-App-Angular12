export interface ITodo {
  _id?: number;
  desc: string;
  priority: string;
  isCompleted?: boolean;
  lastUpdate: Date;
}
