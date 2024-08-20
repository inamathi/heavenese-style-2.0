"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ArrowInCircle from "@/public/img/icons/arrow-in-circle.svg";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="w-[32px] rotate-180 text-blue-400"
    >
      <ArrowInCircle />
    </button>
  );
};

export default BackButton;
