import { userIdAtom } from "@/store";
import { ENDPOINTS, useApiRequest } from "@/utils/apiHelper";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export const useTalkCard = (
  postId: string,
  lastLikeState?: number,
  initialLikeCount_base?: number,
  initialDislikeCount_base?: number
) => {
  const initialLikeCount =
    (lastLikeState === 1
      ? Number(initialLikeCount_base) - 1
      : initialLikeCount_base) || 0;
  const initialDislikeCount =
    (lastLikeState === -1
      ? Number(initialDislikeCount_base) - 1
      : initialDislikeCount_base) || 0;
  const initialLikeState = lastLikeState === -1 ? false : true;

  const [userId] = useAtom(userIdAtom);
  const [roundingAngle, setRoundingAngle] = useState("");
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(Boolean(lastLikeState));
  const [likeState, setLikeState] = useState(
    lastLikeState ? initialLikeState : undefined
  );
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [dislikeCount, setDislikeCount] = useState(initialDislikeCount);

  const [likeLoading, setLikeLoading] = useState(false);
  const [dislikeLoading, setDislikeLoading] = useState(false);

  const { response, error, isLoading } = useApiRequest(
    ENDPOINTS.setPostLikeState,
    {
      userId,
      postId,
      state: likeState,
      remove: !hasLiked,
    },
    isLiking
  );

  useEffect(() => {
    if (hasLiked) {
      if (likeState) {
        setLikeCount(initialLikeCount + 1);
        setDislikeCount(initialDislikeCount);
      } else {
        setLikeCount(initialLikeCount);
        setDislikeCount(initialDislikeCount + 1);
      }
    } else {
      setLikeCount(initialLikeCount);
      setDislikeCount(initialDislikeCount);
    }
  }, [likeState, hasLiked]);

  const handleSetLikeState = (state: boolean) => {
    setIsLiking(true);

    if (hasLiked && state == likeState) {
      setHasLiked(false);
      return;
    }

    if (state) {
      setLikeLoading(true);
    } else {
      setDislikeLoading(true);
    }

    setLikeState(state);
    setHasLiked(true);
  };

  useEffect(() => {
    if (response) {
      setIsLiking(false);
      setDislikeLoading(false);
      setLikeLoading(false);
    }
  }, [isLoading, response]);

  useEffect(() => {
    const random = Math.random();
    if (random >= 0.75) setRoundingAngle("rounded-br-3xl");
    else if (random >= 0.5) setRoundingAngle("rounded-bl-3xl");
    else if (random >= 0.25) setRoundingAngle("rounded-tr-3xl");
    else setRoundingAngle("rounded-tl-3xl");
  }, []);

  return {
    roundingAngle,
    isLiking,
    handleSetLikeState,
    likeState,
    hasLiked,
    likeCount,
    dislikeCount,
    likeLoading,
    dislikeLoading,
  };
};
