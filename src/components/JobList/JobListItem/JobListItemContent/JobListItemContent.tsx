import { FC } from 'react';
import '@/styles/components/_jobList.scss';

interface JobListItemContentProps {
	postedAt: string;
	location: string;
	isNewPost: boolean;
	companyName: string;
	positionName: string;
	contractType: string;
	isFeaturedPost: boolean;
}

const JobListItemContent: FC<JobListItemContentProps> = (props) => {
	const {
		postedAt,
		location,
		isNewPost,
		companyName,
		positionName,
		contractType,
		isFeaturedPost,
	} = props;

	return (
		<div className="list__item-content">
			<div className="title">
				<h4 className="company">{companyName}</h4>
				{isNewPost ? <span className="tag new-tag">NEW!</span> : null}
				{isFeaturedPost ? (
					<span className="tag featured-tag">FEATURED</span>
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

export default JobListItemContent;
