export interface BBSData {
  id: number;
  username: string;
  title: string;
  content: string;
  createdAt: Date;
  description: string;
  tmb: string;
}

export interface TypeUser {
  id: number;
  name: String;
  posts: [];
}

export interface TypePost {
  id: number;
  author: {};
  authorId: number;
  body: string;
}
export interface TypeParams {
  params: {
    epId: number;
  };
}
export interface TypeButtons {
  id: number;
  label: string;
  setActiveComponent: string;
}
export interface TypeEpisode {
  id: number;
  type: string;
  username: string;
  episodeId: number;
  subTitle: string;
  title: string;
  thumbnail: string;
  description: string;
  docsUrl: string;
  good: number;
  bad: number;
  new: boolean;
  newest: boolean;
  banned: boolean;
  recommend: boolean;
  embYt: string;
  embRumble: string;
  embVimeo: string;
  embRec: string;
  createdAt: Date;
  displayDate: string;
  comments: [];
  chapters: [];
}

export interface TypeParody {
  id: number;
  type: string;
  username: string;
  episodeId: number;
  subTitle: string;
  title: string;
  thumbnail: string;
  description: string;
  docsUrl: string;
  good: number;
  bad: number;
  new: boolean;
  newest: boolean;
  banned: boolean;
  recommend: boolean;
  embYt: string;
  embRumble: string;
  embVimeo: string;
  embRec: string;
  createdAt: Date;
  displayDate: string;
}

export interface TypeChapter {
  id: number;
  username: string;
  episodeId: number;
  subTitle: string;
  title: string;
  thumbnail: string;
  description: string;
  docsUrl: string;
  good: string;
  bad: number;
  new: boolean;
  newest: boolean;
  banned: boolean;
  recommend: boolean;
  embYt: string;
  embYtTime: string;
  embRumble: string;
  embRumbleTime: string;
  embVimeo: string;
  embVimeoTime: string;
  embRec: string;
  embRecTime: string;
  createdAt: Date;
  displayDate: string;
}

export interface TypeComment {
  id: number;
  commentId: number;
  refCommentId: number;
  username: string;
  body: String;
  episodeId: number;
  good: number;
  bad: number;
  new: boolean;
  createdAt: Date;
}

export interface TypeRecommendCarousel {
  id: number;
  index: number;
  alt: String;
  imgUrl: String;
  linkUrl: String;
  newFlag: Boolean;
}

// ユーザ情報
export type InitialUserState = {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

export interface TypeItem {
  id: number;
  tag: string;
  orderBy: number;
}
export interface TypeCategory {
  category: string;
  categoryName: string;
  orderBy: number;
  items: TypeItem[];
}
export interface TypeCategories {
  categories: TypeCategory[];
}

export type typeTopItem = {
  key: number;
  linkUrl: string;
  imgUrl: string;
};

export type typeTopData = {
  title: string;
  buttonLabel: string;
  buttonLink: string;
  background: string;
  items: typeTopItem[];
};

export type typeNewestData = {
  linkUrl: string;
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
};
