"use client";

import { InputBar } from "@/components/InputBar";
import { PageLoading } from "@/components/PageLoading";
import { TalkCardsContainer } from "@/components/TalkCardsContainer";
import { getTalkCardsMock } from "@/mocks/getTalkCardsMock";
import { postsAtom, userIdAtom } from "@/store";
import { useApiRequest, ENDPOINTS } from "@/utils/apiHelper";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect } from "react";

export default function Page() {
  const [userId] = useAtom(userIdAtom);
  const [atomizedData, setAtomizedData] = useAtom(postsAtom);
  const { data, isLoading, trigger } = useApiRequest(ENDPOINTS.getHomePosts, {
    userId,
  });

  useEffect(() => {
    if (!data) return;
    setAtomizedData(data);
  }, [data]);

  // const isLoading = true,
  //   data = false;

  // if (isLoading || !data) {
  //   return <PageLoading />;
  // }

  const triggerFullRefresh = () => {
    trigger();
    setAtomizedData(undefined);
  };

  const anyLoading = isLoading || !atomizedData;

  return (
    <>
      {anyLoading && <PageLoading />}
      <div className="w-full inline-flex x-justify-center mb-4">
        <Image
          onClick={triggerFullRefresh}
          alt="logo"
          src="/logo_02.png"
          width={40}
          height={40}
          className="cursor-pointer hover:invert"
        />
      </div>
      {!anyLoading && <TalkCardsContainer cards={atomizedData} />}
      <div className="fixed -bottom-1 left-0 w-full h-1/5 z-10 bg-gradient-to-t from-black to-transparent from-15% flex items-center justify-center">
        <InputBar triggerRefresh={trigger} />
      </div>
    </>
  );
}
