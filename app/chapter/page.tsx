import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EpisodeCardList from "../../components/elements/card/EpisodeCardList";
import TaglistModal from "../../components/SearchCondButton";
import { TypeEpisode } from "../../types/types";
import PageTitle from "@/components/elements/pagetitle/PageTitle";
import Tags from "@/app/api/local/tags.json";
import SearchCondButton from "../../components/SearchCondButton";

// ReactModal.setAppElement(".App");

async function getEpisode() {
  const response = await fetch("http://localhost:3000/api/episode", {
    cache: "no-store"
  });

  const allEpisodeData: TypeEpisode[] = await response.json();

  return allEpisodeData;
}

export default async function page() {
  const allEpisodeData = await getEpisode();
  const pagetitle = "Chapter Ch.";
  const tagList = Tags;
  return (
    <main>
      {/* <Header /> */}
      <PageTitle pagetitle={pagetitle} />
      <SearchCondButton />
      {/* <TaglistModal tagList={tagList} /> */}
      <EpisodeCardList allEpisodeData={allEpisodeData} />
      {/* <Footer /> */}
    </main>
  );
}
