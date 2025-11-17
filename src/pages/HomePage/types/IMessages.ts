export interface IMessage {
  sender: string;
  receiver: string;
  cc?: string[];
  avatar: string;
  date: string;
  time: string;
  timeType: string;
  message: string;
}
