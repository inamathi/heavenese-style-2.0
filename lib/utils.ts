import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// スマホかどうかを判定する
export const isMobile = () => {
  if (document.body.clientWidth < 800) return true;
  // if (document.documentElement.clientWidth < 800) return true;
  return false;
};
