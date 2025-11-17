import { IMessage } from "./IMessages";

export interface ITicket {
  id: string;
  title: string;
  orderNumber: number;
  messages: IMessage[];
}
