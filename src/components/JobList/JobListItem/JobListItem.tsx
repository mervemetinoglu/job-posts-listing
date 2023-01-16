import { FC } from 'react';
import '@/styles/components/_jobList.scss';
import JobListItemTools from './JobListItemTools';
import JobListItemImage from './JobListItemImage';
import JobListItemContent from './JobListItemContent';
import { JobPost } from '@/data/models/jobPost.model';

interface JobListItemProps {
	item: JobPost;
}

const JobListItem: FC<JobListItemProps> = ({ item }) => {
	const listItemStyle = item.featured
		? 'list__item featured-post'
		: 'list__item';

	return (
		<li className={listItemStyle}>
			<JobListItemImage src={item.logo} alt={item.company} />
			<JobListItemContent
				isNewPost={item.new}
				postedAt={item.postedAt}
				location={item.location}
				companyName={item.company}
				positionName={item.position}
				contractType={item.contract}
				isFeaturedPost={item.featured}
			/>
			<JobListItemTools
				role={item.role}
				level={item.level}
				tools={item.tools}
				languages={item.languages}
			/>
		</li>
	);
};

export default JobListItem;
