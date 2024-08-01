import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { newsApis } from '../../apis/news.apis';
import NewsCard from './components/NewsCard';

function ListOfNews() {
  const { data } = useQuery({
    queryKey: ['news'],
    queryFn: newsApis.getNews,
    staleTime: 3000,
  });
  const listOfNews = data?.Item.ListTinTuc;

  return (
    <div className="mt-3 flex flex-col gap-y-2">
      {listOfNews?.map((news) => (
        <Link key={news.Id} to={`/tin-tuc/${news.Id}`}>
          <NewsCard {...news} />
        </Link>
      ))}
    </div>
  );
}

export default ListOfNews;
