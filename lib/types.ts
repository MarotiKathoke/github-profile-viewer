// types.ts
export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}
