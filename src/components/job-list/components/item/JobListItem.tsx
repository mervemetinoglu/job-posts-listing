import classNames from 'classnames';
import { AreaHTMLAttributes, FC } from 'react';

export interface IJobListItemProps extends AreaHTMLAttributes<HTMLLIElement> {
	isFeaturedPost: boolean;
	children: React.ReactNode;
}

export const JobListItem: FC<IJobListItemProps> = ({
	children,
	isFeaturedPost,
	className = '',
	...rest
}) => {
	const listItemCn = classNames({
		jobList__item: true,
		'featured-post': isFeaturedPost,
	});

	return (
		<li className={`${listItemCn} ${className}`} {...rest}>
			{children}
		</li>
	);
};
