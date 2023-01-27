import { FC } from 'react';

export interface IJobListItemImageProps {
  src: string;
  alt: string;
}

export const JobListItemImage: FC<IJobListItemImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="job-list__item-img" />;
};
