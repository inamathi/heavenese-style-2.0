import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EpisodeCardList from "../../components/elements/card/EpisodeCardList";
import { TypeEpisode } from "../../types/types";
import PageTitle from "../../components/elements/pagetitle/PageTitle";

async function getEpisode() {
  const response = await fetch("http://localhost:3000/api/episode", {
    cache: "no-store"
  });

  const allEpisodeData: TypeEpisode[] = await response.json();

  return allEpisodeData;
}

export default async function page() {
  const allEpisodeData = await getEpisode();
  const pagetitle = "Episode";
  return (
    <main>
      {/* <Header /> */}
      <PageTitle pagetitle={pagetitle} />
      <EpisodeCardList allEpisodeData={allEpisodeData} />
      {/* <Footer /> */}
    </main>
  );
}
