import { FC } from 'react';
import './styles/_searchBar.scss';
import { ReactComponent as RemoveIcon } from '@/assets/icons/icon-remove.svg';

export interface ISearchBarProps {
	tags: string[];
	onClickClear: () => void;
	onClickRemove: (tag: string) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({
	tags,
	onClickClear,
	onClickRemove,
}) => {
	return (
		<div className="searchBar">
			<ul>
				{tags.map((tag) => (
					<li key={tag} className="searchBar__item">
						<span className="tagItem">{tag}</span>
						<span className="removeButton" onClick={() => onClickRemove(tag)}>
							<RemoveIcon />
						</span>
					</li>
				))}
			</ul>
			<span className="clearButton" onClick={onClickClear}>
				Clear
			</span>
		</div>
	);
};
