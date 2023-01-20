import { FC } from 'react';
import classNames from 'classnames';

export interface IJobListItemContentProps {
	postedAt: string;
	location: string;
	isNewPost: boolean;
	companyName: string;
	positionName: string;
	contractType: string;
	isFeaturedPost: boolean;
}

export const JobListItemContent: FC<IJobListItemContentProps> = (props) => {
	const {
		postedAt,
		location,
		isNewPost,
		companyName,
		positionName,
		contractType,
		isFeaturedPost,
	} = props;

	const newPostCn = classNames({
		badge: true,
		'badge-new': isNewPost,
	});

	const featuredPostCn = classNames({
		badge: true,
		'badge-featured': isFeaturedPost,
	});

	return (
		<div className="job-list__item-content">
			<div className="item-title">
				<h4 className="item-company-name">{companyName}</h4>
				{isNewPost ? <span className={newPostCn}>NEW!</span> : null}
				{isFeaturedPost ? (
					<span className={featuredPostCn}>FEATURED</span>
				) : null}
			</div>
			<div className="item-body">{positionName}</div>
			<ul className="item-footer">
				<li>{postedAt}</li>
				<li>{contractType}</li>
				<li>{location}</li>
			</ul>
		</div>
	);
};
