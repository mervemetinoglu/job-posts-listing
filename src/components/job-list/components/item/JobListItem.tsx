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
		'job-list__item': true,
		'featured-item ': isFeaturedPost,
	});

	return (
		<li className={`${listItemCn} ${className}`} {...rest}>
			{children}
		</li>
	);
};
