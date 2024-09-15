"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ArrowInCircle from "@/public/img/icons/arrow-in-circle.svg";

const ForwardButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="w-[32px] text-blue-400">
      <ArrowInCircle />
    </button>
  );
};

export default ForwardButton;
