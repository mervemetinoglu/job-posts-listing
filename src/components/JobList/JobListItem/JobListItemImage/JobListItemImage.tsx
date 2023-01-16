import { FC } from 'react';
import '@/styles/components/_jobList.scss';

interface JobListItemImageProps {
	src: string;
	alt: string;
}

const JobListItemImage: FC<JobListItemImageProps> = ({ src, alt }) => {
	return (
		<div>
			<img
				src={src}
				alt={alt}
				className="list__item-img"
				// src="https://via.placeholder.com/75"
			/>
		</div>
	);
};

export default JobListItemImage;
