// 'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { newsApis } from '../../apis/news.apis';
import Breadcrumb from '../../components/Layout/UI/Breadcrumb';
import Title from '../../components/Layout/UI/Title';
import DateLabel from '../../components/Layout/UI/DateLabel';
import FacebookComment from '../../components/FacebookComment/FacebookComment';
import NewsSidebar from '../../components/Layout/NewsSidebar';

// import { News } from '@/@types/news';
// import { newsApis } from '@/app/utils/api-requests';
// import FacebookComment from '@/components/facebook-comment';
// import MaxWidthWrapper from '@/components/max-width-wrapper';
// import NewsSidebar from '@/components/news-sidebar';
// import Breadcrumb from '@/components/ui/breadcrumb';
// import DateLabel from '@/components/ui/date-label';
// import Title from '@/components/ui/title';
// import {
//   type DehydratedState,
//   QueryClient,
//   dehydrate,
// } from '@tanstack/query-core';
// import { HydrationBoundary, useQuery } from '@tanstack/react-query';

function NewsDetailPage() {
  const { id = '' } = useParams();

  const { data: newsDetailData } = useQuery({
    queryKey: ['newsDetail', id],
    queryFn: () => newsApis.getNew(id),
    staleTime: 5 * 1000, // 5 seconds,
    enabled: !!id,
  });

  const { TieuDe, NoiDung, DateHienThi } = newsDetailData?.Item || ({} as News);

  return (
    <>
      <Breadcrumb
        pathnames={[
          { label: 'Tin tức', link: '/news' },
          { label: TieuDe, link: '' },
        ]}
      />

      <Title title={TieuDe} />

      <div className="mt-3 flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
        {/* Content Section */}
        <div className="w-full lg:w-4/5">
          <DateLabel
            date={DateHienThi}
            className="mb-3"
            longText
            iconSize={20}
          />
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: NoiDung }} />

          <h3 className="text-gradient mb-3 mt-4 font-bold">BÌNH LUẬN</h3>

          <FacebookComment dataHref={window.location.href} />
        </div>

        {/* Divider vertical */}
        <div className="h-auto w-1 lg:relative">
          <div className="absolute right-0 top-0 h-full w-1 bg-border" />
        </div>

        {/* Divider horizontal */}
        <div className="relative h-1 w-full lg:hidden">
          <div className="absolute right-0 top-0 h-full w-full bg-border" />
        </div>

        {/* Sidebar Section */}
        <div className="mt-0 flex w-full flex-col lg:mt-0 lg:w-1/5">
          <NewsSidebar id={id} />
        </div>
      </div>
    </>
  );
}

export default NewsDetailPage;
