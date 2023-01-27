import { FC } from 'react';
import './styles/_tagsBar.scss';
import { ReactComponent as RemoveIcon } from '@/assets/icons/icon-remove.svg';

export interface ITagsBarProps {
  tags: string[];
  onClickClear: () => void;
  isPlaceholderShown: boolean;
  onClickRemove: (tag: string) => void;
}

export const TagsBar: FC<ITagsBarProps> = ({
  tags,
  onClickClear,
  onClickRemove,
  isPlaceholderShown,
}) => {
  return (
    <div className="tags-bar__wrapper">
      {isPlaceholderShown ? (
        <span className="tags-bar__placeholder">
          Filter by level, role, tools...
        </span>
      ) : (
        <div className="tags-bar__container">
          <ul className="tags-list">
            {tags.map((tag) => (
              <li key={tag} className="tags-list__item">
                <span className="tag-name">{tag}</span>
                <span className="remove-btn" onClick={() => onClickRemove(tag)}>
                  <RemoveIcon />
                </span>
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={onClickClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
