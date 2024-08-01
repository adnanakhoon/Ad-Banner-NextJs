import { create } from 'zustand';

type AdBanner = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
};

type Store = {
  ads: AdBanner[];
  setAds: (ads: AdBanner[]) => void;
};

const useStore = create<Store>((set) => ({
  ads: [],
  setAds: (ads: AdBanner[]) => set({ ads }),
}));

export default useStore;
