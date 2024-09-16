import { useEffect, useReducer } from "react";
import Image from "next/image";
import { TypeChapter, TypeEpisode } from "@/types/types";
import { getEpisodeDetailData } from "@/app/episode/[epId]/page";

const initialState = {
  data: null,
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const TabChapter = async ({ params }: { params: { epId: number } }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/episode/${id}`,
          {
            cache: "no-store"
          }
        );
        const result = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: result });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });
      }
    };

    fetchData();
  }, []);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error.message}</div>;

  const episodeDetailData = await getEpisodeDetailData(params.epId);
  const {
    id,
    episodeId,
    subTitle,
    title,
    thumbnail,
    description,
    displayDate,
    embYt,
    chapters,
    comments
  } = episodeDetailData;
  return (
    <div>
      <div className="flex flex-col gap-2">
        {episodeDetailData.chapters.map((chapter: TypeChapter) => (
          <div key={chapter.id} className="flex gap-2">
            <Image src={chapter.thumbnail} width="140" height="80" alt="hoge" />
            <div>
              <p className="text-sm">{chapter.embYtTime}</p>
              <p className="text-sm">{chapter.subTitle}</p>
              <p className="text-sm font-bold">{chapter.title}</p>
              <p className="text-sm">{chapter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabChapter;
