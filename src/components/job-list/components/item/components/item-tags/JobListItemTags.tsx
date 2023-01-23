import { AreaHTMLAttributes, FC } from 'react';

export interface IJobListItemTagsProps
	extends AreaHTMLAttributes<HTMLDivElement> {
	role: string;
	level: string;
	tools: string[];
	languages: string[];
	tagOnClick: (tag: string) => void;
}

export const JobListItemTags: FC<IJobListItemTagsProps> = ({
	role,
	level,
	tools,
	languages,
	tagOnClick,
	className = '',
	...rest
}) => {
	const tagsList = [...new Set<string>([role, level, ...languages, ...tools])];

	return (
		<div className={`job-list__item-tags ${className}`} {...rest}>
			{tagsList.map((item: string) => (
				<button key={item} onClick={() => tagOnClick(item)}>
					{item}
				</button>
			))}
		</div>
	);
};
