import data from '@/data/jobPostings.json';
import { useEffect, useState } from 'react';
import { JobPost } from '@/data/models/jobPost.model';
import { Header, JobList, TagsBar } from '@/components';

import '@/styles/pages/_home.scss';

export const Home = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [filteredData, setFilteredData] = useState<JobPost[]>(data);

	const isPlaceholderShown = selectedTags.length === 0;

	const clearTagsBarHandler = () => {
		setSelectedTags([]);
	};

	const tagOnClick = (tag: string) => {
		setSelectedTags(
			(prev: string[]) => [...new Set([...prev, tag])] as string[]
		);
	};

	const removeTagHandler = (selectedTag: string) => {
		setSelectedTags((prev) => prev.filter((tag) => tag !== selectedTag));
	};

	useEffect(() => {
		if (selectedTags.length === 0) {
			setFilteredData(data);
		} else {
			setFilteredData(
				data.filter((job) => {
					const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

					return selectedTags.every((selectedTag) =>
						jobTags.includes(selectedTag)
					);
				})
			);
		}
	}, [selectedTags]);

	return (
		<div>
			<Header />
			<div className="home-wrapper">
				<TagsBar
					tags={selectedTags}
					onClickRemove={removeTagHandler}
					onClickClear={clearTagsBarHandler}
					isPlaceholderShown={isPlaceholderShown}
				/>
				<JobList data={filteredData} tagOnClick={tagOnClick} />
			</div>
		</div>
	);
};
