"use client";

import { useEffect, useState } from "react";
import { uid } from "uid";
import { useAtom } from "jotai";
import { userIdAtom } from "@/store";
import { CLIENT_ID_KEY } from "./ClientSetup.consts";

export const ClientSetup = () => {
  const [userId, setUserId] = useAtom(userIdAtom);

  useEffect(() => {
    if (!userId) {
      const localUserId = localStorage.getItem(CLIENT_ID_KEY);

      if (localUserId) {
        setUserId(localUserId);
        return;
      }

      const id = uid(32);
      setUserId(id);

      localStorage.setItem(CLIENT_ID_KEY, id);
    }
  }, [userId, setUserId]);

  return null;
};
