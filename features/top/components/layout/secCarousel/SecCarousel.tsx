import Image from "next/image";
import React from "react";
import { CategoryButton } from "@/app/components/elements/button/Button";

const SecCarousel = () => {
  return (
    <section>
      <div className="w-full text-center text-3xl font-bold py-0"></div>
      <div>
        <div className="flex justify-center relative bg-slate-400">
          <Image
            src="/img/thumbnail/tmb-1210-l.png"
            style={{ width: "300px" }}
            width="300"
            height="214"
            alt=""
          />
          <Image
            src="/img/thumbnail/tmb-3100-l.png"
            style={{ width: "300px" }}
            width="300"
            height="214"
            alt=""
          />
          <Image
            src="/img/thumbnail/tmb-2014-l.png"
            style={{ width: "300px" }}
            width="300"
            height="214"
            alt=""
          />
          <Image
            src="/img/thumbnail/tmb-4014-l.png"
            style={{ width: "300px" }}
            width="300"
            height="214"
            alt=""
          />
          <Image
            src="/img/thumbnail/tmb-3109-l.png"
            style={{ width: "300px" }}
            width="300"
            height="214"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SecCarousel;
