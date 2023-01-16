import { FC } from 'react';
import '@/styles/components/_jobList.scss';

interface JobListItemTagsProps {
	role: string;
	level: string;
	tools: string[];
	languages: string[];
}

const JobListItemTags: FC<JobListItemTagsProps> = ({
	role,
	level,
	tools,
	languages,
}) => {
	return (
		<div className="list__item-tools">
			<span>{role}</span>
			<span>{level}</span>
			{languages.map((language) => (
				<span key={language}>{language}</span>
			))}
			{tools.map((tool) => (
				<span key={tool}>{tool}</span>
			))}
		</div>
	);
};

export default JobListItemTags;
