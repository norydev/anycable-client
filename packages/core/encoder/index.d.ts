export interface Encoder<MessageType = object, WireType = string | Uint8Array> {
  encode(msg: MessageType): WireType | void
  decode(raw: WireType): MessageType | void
}

export class JSONEncoder implements Encoder<object, string> {
  encode(msg: object): string
  decode(raw: string): object | void
}
