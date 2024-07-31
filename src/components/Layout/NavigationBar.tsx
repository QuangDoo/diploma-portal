import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { introductionApis } from '../../apis/introduction.apis';
import MaxWidthWrapper from './MaxWidthWrapper';
import MenuBar from './MenuBar';
import SkeletonImage from 'antd/es/skeleton/Image';

function NavigationBar() {
  const { data } = useQuery({
    queryKey: ['project-information'],
    queryFn: introductionApis.getInformation,
  });

  const { LienHe } = data?.Item || ({} as Information);

  return (
    <nav className="bg-custom-gradient transition-all sticky z-40 top-0 left-0">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16 lg:h-20 ">
          <div className="flex items-center gap-2 lg:gap-4">
            <Link to={'/'}>
              {LienHe?.AvatarLink ? (
                <img
                  src={LienHe?.AvatarLink}
                  alt={``}
                  sizes="100vw"
                  className="object-cover w-14 h-14 rounded-full lg:w-16 lg:h-16"
                />
              ) : (
                <SkeletonImage className="w-10 h-10" active />
              )}
            </Link>
            <div>
              <h2 className="text-xxs font-bold uppercase leading-snug text-slate-100 lg:text-xl">
                <p className="h-3">{LienHe?.CoQuanChuQuan}</p>
                <br />
                <p>Cổng thông tin tra cứu văn bằng chứng chỉ</p>
              </h2>
            </div>
          </div>

          <MenuBar />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default NavigationBar;
