import { FC } from 'react';
import {
  JobListItemTags,
  JobListItemImage,
  JobListItemContent,
} from './components/item/components';
import { JobListItem } from './components/item';
import { JobPost } from '@/data/models/jobPost.model';

import './styles/_jobList.scss';

export interface IJobListProps {
  data: JobPost[];
  tagOnClick: (tag: string) => void;
}

export const JobList: FC<IJobListProps> = ({ data, tagOnClick }) => {
  return (
    <ul className="job-list__wrapper">
      {data.map((post) => (
        <JobListItem key={post.id} isFeaturedPost={post.featured}>
          <JobListItemImage src={post.logo} alt={post.company} />
          <JobListItemContent
            isNewPost={post.new}
            postedAt={post.postedAt}
            location={post.location}
            companyName={post.company}
            positionName={post.position}
            contractType={post.contract}
            isFeaturedPost={post.featured}
          />
          <JobListItemTags
            role={post.role}
            level={post.level}
            tools={post.tools}
            tagOnClick={tagOnClick}
            languages={post.languages}
          />
        </JobListItem>
      ))}
    </ul>
  );
};
