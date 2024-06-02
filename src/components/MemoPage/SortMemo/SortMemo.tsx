import type { SortButtonType } from '../../../types';
import SortButton from './SortButton/SortButton';
import styles from './SortMemo.module.css';

const SortMemo = () => {
  const buttonInfoList: SortButtonType[] = [
    { name: '최신순', sortType: 'latest' },
    { name: '오래된순', sortType: 'oldest' },
    { name: '글자수 많은순', sortType: 'longest' },
    { name: '글자수 적은순', sortType: 'shortest' }
  ];

  return (
    <ul className={styles.sort_button_list}>
      {buttonInfoList.map((buttonInfo) => (
        <SortButton
          key={buttonInfo.name}
          buttonInfo={buttonInfo}
        />
      ))}
    </ul>
  );
};

export default SortMemo;
