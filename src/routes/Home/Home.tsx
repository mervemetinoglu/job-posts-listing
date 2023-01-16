import '@/styles/pages/_home.scss';
import Header from '@/components/Header';
import data from '@/data/jobPostings.json';
import JobList from '@/components/JobList';

const Home = () => {
	return (
		<div className="home-bg">
			<Header />
			<JobList data={data} />
		</div>
	);
};

export default Home;
