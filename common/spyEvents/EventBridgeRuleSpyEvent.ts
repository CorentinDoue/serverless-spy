import { SpyEvent } from './SpyEvent';

export interface EventBridgeRuleSpyEvent<
  MessageType = any,
  EventBridgeDetailType extends string = string
> extends SpyEvent {
  spyEventType: 'EventBridgeRule';
  detail: MessageType;
  detailType: EventBridgeDetailType;
  source: string;
  time: string;
  account: string;
}
