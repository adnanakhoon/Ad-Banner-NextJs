'use client';

import { useEffect, useState } from 'react';
import BannerImageComp from '../../components/BannerImageComp';
import EditBannerTemplateBs from '../../components/EditBannerTemplateBs';
import useStore from './store'; // Adjust path if necessary

type AdBanner = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
};

export default function Home() {
  const { ads, setAds } = useStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentAd, setCurrentAd] = useState<AdBanner | null>(null);
  const [editedAd, setEditedAd] = useState<AdBanner | null>(null);

  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await fetch('/api/ads');
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error('Failed to fetch ads', error);
      }
    }

    fetchAds();
  }, [setAds]);

  const handleEditClick = (ad: AdBanner) => {
    setCurrentAd(ad);
    setEditedAd(ad);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setCurrentAd(null);
    setEditedAd(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedAd) {
      setEditedAd({
        ...editedAd,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSave = (updatedAd: AdBanner) => {
    if (editedAd) {
      const updatedAds = ads.map(ad =>
        ad.title === updatedAd.title ? updatedAd : ad
      );
      setAds(updatedAds);
      handleDrawerClose();
    }
  };

  return (
    <div>
      {ads.map((ad, index) => (
        <BannerImageComp
          key={index}
          ad={ad}
          onEdit={() => handleEditClick(ad)}
        />
      ))}

      <EditBannerTemplateBs
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        ad={editedAd}
        onSave={handleSave}
        onInputChange={handleInputChange}
      />
    </div>
  );
}
