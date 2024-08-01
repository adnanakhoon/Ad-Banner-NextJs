import React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { AdBanner } from '../types/adBanner';
import styles from '../styles/BannerImageComp.module.css';

interface BannerImageCompProps {
  ad: AdBanner;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ ad, onEdit }) => {
  return (
    <div className={styles.bannerContainer} style={{ backgroundImage: `url(${ad.background})` }}>
      <div className={styles.editButton}>
        <IconButton  aria-label="edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </div>
      <div className={styles.bannerContent}>
        <Image src={ad.image} alt={ad.title} layout="responsive" width={600} height={300} />
        <h2>{ad.title}</h2>
        <p>{ad.description}</p>
        <button className={styles.ctaButton}>{ad.cta}</button>
      </div>
    </div>
  );
};

export default BannerImageComp;
