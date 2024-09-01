import { userGenderWithEffectAtom, userIdAtom } from "@/store";
import { Genders } from "@/types/Gender";
import { useApiRequest, ENDPOINTS } from "@/utils/apiHelper";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

export const useInputBar = ({ triggerRefresh }) => {
  const [id] = useAtom(userIdAtom);
  const [gender, setGender] = useAtom(userGenderWithEffectAtom);
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
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setIsSubmitDisabled(true);
      setIsModalOpen(true);
      triggerRefresh();
    }
  }, [isLoading, response]);

  const handleSubmit = async () => {
    setShouldEnablePost(true);
  };

  const handleOnChange = () => {
    setContent(inputRef?.current?.value ?? "");

    if (inputRef?.current?.value) setIsSubmitDisabled(false);
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
