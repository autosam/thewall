"use client";

import { InputBar } from "@/components/InputBar";
import { PageLoading } from "@/components/PageLoading";
import { TalkCard } from "@/components/TalkCard";
import { TalkCardsContainer } from "@/components/TalkCardsContainer";
import { getTalkCardsMock } from "@/mocks/getTalkCardsMock";
import { useApiRequest, ENDPOINTS } from "@/utils/apiHelper";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function Page() {
  const { data, isLoading, trigger } = useApiRequest(ENDPOINTS.getHomePosts);

  // const isLoading = true,
  //   data = false;

  if (isLoading || !data) {
    return <PageLoading />;
  }

  return (
    <>
      <TalkCardsContainer cards={data} />
      <div className="fixed bottom-0 w-full h-1/5 z-10 bg-gradient-to-t from-black to-transparent from-15% flex items-center justify-center">
        <InputBar triggerRefresh={trigger} />
      </div>
    </>
  );
}
