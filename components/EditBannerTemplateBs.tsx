import React from 'react';
import { Drawer, TextField, Button } from '@mui/material';
import { AdBanner } from '../types/adBanner';
import styles from '../styles/EditBannerTemplateBs.module.css';

interface EditBannerTemplateBsProps {
  open: boolean;
  onClose: () => void;
  ad: AdBanner | null;
  onSave: (updatedAd: AdBanner) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  open,
  onClose,
  ad,
  onSave,
  onInputChange
}) => {
  if (!ad) return null;

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <div className={styles.drawerContent}>
        <TextField
          label="Title"
          name="title"
          value={ad.title}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={ad.description}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CTA"
          name="cta"
          value={ad.cta}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="image"
          value={ad.image}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Background"
          name="background"
          value={ad.background}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <div className={styles.buttonContainer}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => ad && onSave(ad)} color="primary">Save</Button>
        </div>
      </div>
    </Drawer>
  );
};

export default EditBannerTemplateBs;
