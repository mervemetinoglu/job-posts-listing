import { FC } from 'react';

export interface IJobListItemImageProps {
	src: string;
	alt: string;
}

export const JobListItemImage: FC<IJobListItemImageProps> = ({ src, alt }) => {
	return (
		<div>
			<img src={src} alt={alt} className="list__item-img" />
		</div>
	);
};
