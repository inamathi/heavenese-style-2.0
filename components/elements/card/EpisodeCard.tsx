import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ViewerButton from '../button/ViewerButton'
import { TypeEpisode } from '../../../types/types'

interface EpisodeDataProps {
  //map関数で展開するため、配列であることを定義
  episodeData: TypeEpisode
}

const EpisodeCard = ({ episodeData }: EpisodeDataProps) => {
  const {
    id,
    episodeId,
    subTitle,
    title,
    thumbnail,
    description,
    createdAt,
    displayDate
  } = episodeData
  return (
    <div className="flex flex-col gap-1 border-2 p-2 border-radius rounded-md border-1 border-slate-100 max-w-[250px]">
      <Image
        src={thumbnail}
        style={{ width: '240px' }}
        width="240"
        height="171"
        alt=""
      />
      <div className="text-sm mt-1 font-bold">
        HEAVENESE style episode {episodeId}
      </div>
      <div className="text-sm font-bold">{subTitle}</div>
      <div className="text-l font-bold">{title}</div>
      <div className="text-sm">{displayDate}</div>
      <Link href={`/episode/${episodeId}`} className="text-blue-500">
        <ViewerButton />
      </Link>
    </div>
  )
}

export default EpisodeCard
