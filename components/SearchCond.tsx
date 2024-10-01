"use client";

import React, { ReactNode } from "react";
import styles from "@/css/SearchCond.module.scss";
import { useAppDispatch } from "@/store/store";
import { closeSearchCondDialog, setCond } from "@/hooks/searchCondSlice";
import Categories from "@/app/api/local/tags.json";
import { TypeCategory, TypeItem } from "@/types/types";

const SearchCond = () => {
  const dispatch = useAppDispatch();

  // 閉じるボタン
  const onClickClose = () => {
    dispatch(closeSearchCondDialog());
  };

  // カテゴリタップボタン
  const onClickSelect = (item: string) => {
    dispatch(setCond(item));
    alert(item);
    dispatch(closeSearchCondDialog());

    // TODO
    // チャプター検索へ飛ばす
  };

  // カテゴリ描画
  const renderCategories = (): ReactNode => {
    // TODO：DBから取得する際、並び順は指定して取得する
    // DBにやらせれば良いことは、プログラム中でやらないようにしたいが可能か？
    // 要確認
    const categories = Categories;
    // alert(categories.length || '件')
    if (!categories.length) return null;

    return (
      <div className="m-8 p-8 bg-white rounded-xl">
        <div className="flex flex-col gap-8">
          {categories.map((category: TypeCategory) => (
            <div>
              {/* カテゴリタイトル */}
              <h2 className="text-md block font-bold pl-4 py-1 border-l-4 border-slate-500 mb-4 bg-slate-100">
                {category.categoryName}
              </h2>

              {/* カテゴリアイテム */}
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item: TypeItem) => (
                  <li
                    key={item.id}
                    className="bg-blue-100 text-slate-900 text-sm px-4 py-2 rounded font-bold cursor-pointer"
                    onClick={() => onClickSelect(item.tag)}
                  >
                    {item.tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    // ダイアログ用に全画面を覆う
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950 bg-opacity-80 z-50">
      {/* 閉じるボタン */}
      <button onClick={onClickClose} className={styles.close} />

      {/* カテゴリ描画 */}
      {renderCategories()}
    </div>
  );
};

export default SearchCond;
