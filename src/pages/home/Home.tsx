import data from '@/data/jobPostings.json';
import { useEffect, useState } from 'react';
import { JobPost } from '@/data/models/jobPost.model';
import { Header, JobList, SearchBar } from '@/components';

import '@/styles/pages/_home.scss';

export const Home = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [filteredData, setFilteredData] = useState<JobPost[]>(data);

	const clearTagsBarHandler = () => {
		setSelectedTags([]);
	};

	const tagOnClick = (tag: string) => {
		setSelectedTags((prev) => [...new Set([...prev, tag])]);
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
			<div className="container">
				<SearchBar
					tags={selectedTags}
					onClickRemove={removeTagHandler}
					onClickClear={clearTagsBarHandler}
				/>
				<JobList data={filteredData} tagOnClick={tagOnClick} />
			</div>
		</div>
	);
};
