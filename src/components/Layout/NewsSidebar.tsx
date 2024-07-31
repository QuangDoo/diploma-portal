import { useQuery } from '@tanstack/react-query';
import NewsIcon from '../../assets/icons/NewsIcon';
import Title from './UI/Title';
import { newsApis } from '../../apis/news.apis';
import { Link } from 'react-router-dom';
import DateLabel from './UI/DateLabel';
import { Empty, Skeleton } from 'antd';

function NewsSidebar({ id }: { id?: string }) {
  const { data: listOfNewsData, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: newsApis.getNews,
    staleTime: 5 * 1000,
  });

  return (
    <>
      <Title title="Tin tức mới nhất" icon={<NewsIcon />} />

      <div className="mt-3 flex flex-col gap-y-4">
        <Skeleton active loading={isLoading} />

        {/* Tin tức mới nhất */}
        {listOfNewsData?.Item.ListTinTuc.filter((news) => news.Id !== id)
          .slice(0, 3)
          .map((news) => (
            <Link key={news.Id} to={`/news/${news.Id}`} className="group">
              <h3 className="text-gradient text-gradient-hover line-clamp-1 text-sm font-bold group-hover:text-link">
                {news.TieuDe}
              </h3>

              <div
                dangerouslySetInnerHTML={{ __html: news.NoiDung }}
                className="text-indent-20 line-clamp-2 text-sm"
              />

              <DateLabel date={news.DateHienThi} />

              <div className="mt-3 h-1 w-full bg-border" />
            </Link>
          ))}

        {!listOfNewsData?.Item.ListTinTuc.length && !isLoading && <Empty />}
      </div>
    </>
  );
}

export default NewsSidebar;
