import RelatedLink from './RelatedLink/RelatedLink';

const RelatedLinkList = () => {
  const relatedLinkList = [
    { linkName: 'Email', to: 'mailto:colorlessdia@gmail.com', link: 'colorlessdia@gmail.com', title: '이메일 보내기' },
    { linkName: 'Github', to: 'https://github.com/colorlessdia', link: 'https://github.com/colorlessdia', title: '깃허브 바로가기(새창)' },
    { linkName: 'Baekjoon', to: 'https://www.acmicpc.net/user/castling', link: 'https://www.acmicpc.net/user/castling', title: '백준 바로가기(새창)' }
  ];

  return (
    <ul>
      {relatedLinkList.map(relatedLink => (
        <RelatedLink
          key={relatedLink.linkName}
          relatedLink={relatedLink}
        />
      ))}
    </ul>
  );
};

export default RelatedLinkList;