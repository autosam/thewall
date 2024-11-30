import { Gender } from "./Gender";

export type TalkData = {
  content: string;
  gender: Gender;
  id: string;
  time: string;
  isMine?: boolean;
  myLikeInteraction?: any;
  likeCount?: number;
  dislikeCount?: number;
  isMock?: boolean
};
