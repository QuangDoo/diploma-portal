// import { News } from '@/@types/news';
// import DateLabel from '@/components/ui/date-label';
// import Image from 'next/image';
import { useState } from 'react';
import DateLabel from '../../../components/Layout/UI/DateLabel';

const NewsCard = (props: News) => {
  const { TieuDe, Avatar, NoiDung, CreateDateTime } = props;
  const [imageSrc, setImageSrc] = useState(Avatar);

  return (
    <div className="group mx-auto max-w-screen-xl overflow-hidden rounded-xl bg-white shadow-md">
      <div className="md:flex">
        <div className="md:shrink-0 lg:p-2">
          <div className="relative h-full w-full pb-[60%] md:w-72">
            <img
              className="absolute left-0 top-0 !h-full !w-full object-cover"
              src={imageSrc}
              alt={TieuDe}
              onError={() =>
                setImageSrc(
                  'https://www.iconpacks.net/icons/4/free-no-image-icon-14596-thumb.png',
                )
              }
              width={260}
              height={168}
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-2">
          <p className="text-gradient text-gradient-hover mt-1 block text-sm font-bold leading-tight">
            {TieuDe}
          </p>

          <DateLabel date={CreateDateTime} className="mt-3" />

          <div
            className="mt-2 line-clamp-5 text-base"
            title={TieuDe}
            dangerouslySetInnerHTML={{ __html: NoiDung }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
