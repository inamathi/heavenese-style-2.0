'use client'

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { showSearchCondDialog } from '@/hooks/searchCondSlice'

const SearchCondButton = () => {
  const searchCond = useAppSelector((state) => state.searchCond.searchCond)
  const dispach = useAppDispatch()

  // 選択した文字列を表示
  const renderSearchCond = () => {
    if (!searchCond) return null

    return (
      <div className="px-4 py-2 text-blue-500 text-sm">
        <label>{searchCond}</label>
      </div>
    )
  }

  // クリックイベント
  const onClickSearchCond = () => {
    dispach(showSearchCondDialog())
  }

  return (
    <div className="mx-auto flex justify-center mb-8">
      <button
        onClick={onClickSearchCond}
        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
      >
        タグで絞り込む
      </button>

      {/* 選択した文字列 */}
      {renderSearchCond()}

      {/* 選択した文字列の解除 */}
      {/* TODO：バツボタンでクリア */}
    </div>
  )
}

export default SearchCondButton
