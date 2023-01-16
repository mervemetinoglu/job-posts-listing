import { FC } from 'react';
import '@/styles/components/index.scss';
import JobListItem from './JobListItem/JobListItem';
import { JobPost } from '@/data/models/jobPost.model';

interface JobListProps {
	data: JobPost[];
}

const JobList: FC<JobListProps> = ({ data }) => {
	return (
		<ul className="list">
			{data.map((post) => (
				<JobListItem key={post.id} item={post} />
			))}
		</ul>
	);
};

export default JobList;
