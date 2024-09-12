"use client";

import { InputBar } from "@/components/InputBar";
import { PageLoading } from "@/components/PageLoading";
import { TalkCard } from "@/components/TalkCard";
import { TalkCardsContainer } from "@/components/TalkCardsContainer";
import { getTalkCardsMock } from "@/mocks/getTalkCardsMock";
import { userIdAtom } from "@/store";
import { useApiRequest, ENDPOINTS } from "@/utils/apiHelper";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Page() {
  const [userId] = useAtom(userIdAtom);
  const { data, isLoading, trigger } = useApiRequest(ENDPOINTS.getHomePosts, {
    userId,
  });

  // const isLoading = true,
  //   data = false;

  // if (isLoading || !data) {
  //   return <PageLoading />;
  // }

  const anyLoading = isLoading || !data;

  return (
    <>
      {anyLoading && <PageLoading />}
      {!anyLoading && <TalkCardsContainer cards={data} />}
      <div className="fixed bottom-0 left-0 w-full h-1/5 z-10 bg-gradient-to-t from-black to-transparent from-15% flex items-center justify-center">
        <InputBar triggerRefresh={trigger} />
      </div>
    </>
  );
}
