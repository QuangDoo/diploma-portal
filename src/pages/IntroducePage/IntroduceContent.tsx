// import { introductionApis } from './utils/api-requests';

import { useQuery } from '@tanstack/react-query';
import { introductionApis } from '../../apis/introduction.apis';
import { Empty, Skeleton } from 'antd';

function IntroductionContent() {
  const { data, isLoading } = useQuery({
    queryKey: ['project-information'],
    queryFn: introductionApis.getInformation,
    staleTime: 3000,
  });

  const { Title, Value } =
    data?.Item.GioiThieu.Value || ({} as { Title: string; Value: string });

  return (
    <div>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          {!Title && !Value ? (
            <Empty />
          ) : (
            <>
              <h1 className="text-gradient text-center text-base font-bold md:text-xl lg:text-2xl">
                {Title || 'thêm cái giới thiệu trong admin á'}
                hello
              </h1>

              <div
                dangerouslySetInnerHTML={{
                  __html: Value || '',
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default IntroductionContent;
