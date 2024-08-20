import Link from 'next/link'
import Image from 'next/image'
import SplashLogo from '@/public/logo_hstv.svg'
import React from 'react'
import Newest from './newest/Newest'
import SecEpisode from '../secEpisode/SecEpisode'

const Splash = () => {
  return (
    <div className="bg-slate-900 flex flex-col gap-8 pt-8 items-center">
      <div className="flex justify-center text-white mt-8 mb-8">
        <SplashLogo
          src="/img/logo_hstv.svg"
          width="500"
          height="200"
          alt="logo"
          className="text-white max-w-[500px]"
        />
      </div>
      <Newest />
      <SecEpisode title="Episode" buttonLabel="Back Number一覧" />
    </div>
  )
}

export default Splash
