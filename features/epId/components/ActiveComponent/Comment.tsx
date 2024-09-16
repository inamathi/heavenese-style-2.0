import SubmitButton from "@/components/elements/button/SubmitButton";
import { TypeComment } from "@/types/types";
import React from "react";

const Comment = ({ ...epData }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-1">
        <div className="text-sm text-slate-600">Username:</div>
        <textarea className="border-2 border-slate-200 w-full px-2 py-1 rounded-sm min-h-[60px]" />
        <button className="w-[60px] h-[60px] text-white bg-slate-400 p-3 rounded-md">
          <SubmitButton />
        </button>
      </div>
      {epData.comments.map((comment: TypeComment) => (
        <div key={comment.id} className="text-sm flex flex-col gap-[2px]]">
          <div className="text-slate-500 text-[12px]">{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
      {epData.comments.map((comment: TypeComment) => (
        <div key={comment.id} className="text-sm flex flex-col gap-[2px]]">
          <div className="text-slate-500 text-[12px]">{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
      {epData.comments.map((comment: TypeComment) => (
        <div key={comment.id} className="text-sm flex flex-col gap-[2px]]">
          <div className="text-slate-500 text-[12px]">{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
      {epData.comments.map((comment: TypeComment) => (
        <div key={comment.id} className="text-sm flex flex-col gap-[2px]]">
          <div className="text-slate-500 text-[12px]">{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
      {epData.comments.map((comment: TypeComment) => (
        <div key={comment.id} className="text-sm flex flex-col gap-[2px]]">
          <div className="text-slate-500 text-[12px]">{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
