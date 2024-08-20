import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContentsCardList from "../components/elements/card/EpisodeCardList";
import { TypePost, TypeUser } from "../types/types";
import aaa from "@/public/img/thumbnail/tmb-1200-l.png";

async function getDev() {
  const response = await fetch("http://localhost:3000/api/dev", {
    cache: "no-store",
  });

  const allUserData: TypeUser[] = await response.json();

  return allUserData;
}

export default async function page() {
  const allUserData = await getDev();

  return (
    <main>
      <Header />
      <div className="grid lg:grid-cols-3 gap-4 p-4">
        {allUserData.map((userData: TypeUser) => (
          <div key={userData.id}>
            {userData.name}

            {userData.posts.map((post: TypePost) => (
              <div key={post.id}>{post.body}</div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
