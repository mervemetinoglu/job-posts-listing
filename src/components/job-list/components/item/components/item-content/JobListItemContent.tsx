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
		<div className="list__item-content">
			<div className="title">
				<h4 className="company">{companyName}</h4>
				{isNewPost ? <span className={newPostCn}>NEW!</span> : null}
				{isFeaturedPost ? (
					<span className={featuredPostCn}>FEATURED</span>
				) : null}
			</div>
			<div className="body">{positionName}</div>
			<ul className="footer">
				<li className="footer__item">{postedAt}</li>
				<li className="footer__item">{contractType}</li>
				<li className="footer__item">{location}</li>
			</ul>
		</div>
	);
};
