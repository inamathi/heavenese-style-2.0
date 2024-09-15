'use client'
import SearchCond from '@/components/SearchCond'
import { useAppSelector } from '@/store/store'

// use Client で使用するために ダイアログ をラップする
const DialogShow = () => {
  const showSearchCond = useAppSelector((state) => state.searchCond.showDialog)

  // ダイアログを表示する
  const showDialog = () => {
    // 優先順位の高い順に表示する

    // 検索条件ダイアログ
    if (showSearchCond) {
      return <SearchCond />
    }

    return null
  }

  return (
    <>
      {/* ダイアログの表示 */}
      {showDialog()}
    </>
  )
}
export default DialogShow
