import type { SortButtonType } from '../../../types';
import SortButton from './SortButton/SortButton';
import styles from './SortMemo.module.css';

const SortMemo = () => {
  const buttonInfoList: SortButtonType[] = [
    { name: '최신순', sortType: 'latest', description: '작성 최신순으로 정렬됩니다' },
    { name: '오래된순', sortType: 'oldest', description: '작성 오래된순으로 정렬됩니다' },
    { name: '글자수 많은순', sortType: 'longest', description: '글자수가 많은순으로 정렬됩니다' },
    { name: '글자수 적은순', sortType: 'shortest', description: '글자수가 적은순으로 정렬됩니다' }
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
