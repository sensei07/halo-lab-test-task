import JOIN_STUDIO_DATA from "./join-studio.json";

export interface JoinStudioData {
  title: string;
  imageUrl: string;
  benefits: {
    title: string;
    subtitle: string;
  }[];
}
export const getJoinStudioData = (): JoinStudioData => {
  return JOIN_STUDIO_DATA as JoinStudioData;
};
