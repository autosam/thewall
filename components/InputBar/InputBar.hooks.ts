import { postsAtom, userGenderWithEffectAtom, userIdAtom } from "@/store";
import { Genders } from "@/types/Gender";
import { TalkData } from "@/types/TalkData";
import { useApiRequest, ENDPOINTS } from "@/utils/apiHelper";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

export const useInputBar = ({ triggerRefresh }: { triggerRefresh: any }) => {
  const [id] = useAtom(userIdAtom);
  const [gender, setGender] = useAtom(userGenderWithEffectAtom);
  const [atomizedData, setAtomizedData] = useAtom(postsAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isGenderLoading, setIsGenderLoading] = useState(true);
  const [content, setContent] = useState("");
  const [shouldEnablePost, setShouldEnablePost] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { response, error, isLoading } = useApiRequest(
    ENDPOINTS.createPost,
    {
      id,
      gender,
      content,
    },
    shouldEnablePost
  );

  useEffect(() => {
    setIsSubmitting(isLoading);
    if (!isLoading && response) {
      setShouldEnablePost(false);

      const newTalkData: TalkData = {
        content,
        gender,
        id,
        time: Date().toString(),
        isMock: true,
        isMine: true,
      }
      setAtomizedData((previous) => {
        if(!previous) return [newTalkData];
        return [newTalkData, ...previous];
      })
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setIsSubmitDisabled(true);
      setIsModalOpen(true);
      // triggerRefresh();
    }
  }, [isLoading, response]);

  const handleSubmit = async () => {
    setShouldEnablePost(true);
  };

  const handleOnChange = () => {
    const content = (inputRef?.current?.value ?? "").slice(0, 256);
    if(inputRef?.current) inputRef.current.value = content;
    setContent(content);

    if (content) setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);

    setIsModalOpen(false);
  };

  const handleGenderChange = () => {
    switch (gender) {
      case Genders.HE:
        setGender(Genders.SHE);
        break;
      case Genders.SHE:
        setGender(Genders.THEY);
        break;
      case Genders.THEY:
        setGender(Genders.HE);
        break;
    }
  };

  useEffect(() => {
    setIsGenderLoading(false);
  }, [gender]);

  return {
    gender,
    isSubmitting,
    isSubmitDisabled,
    isGenderLoading,
    handleOnChange,
    handleSubmit,
    handleGenderChange,
    inputRef,
    isModalOpen,
    setIsModalOpen,
  };
};
