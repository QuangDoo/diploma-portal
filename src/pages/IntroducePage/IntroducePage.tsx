import NewsSidebar from '../../components/Layout/NewsSidebar';
import Breadcrumb from '../../components/Layout/UI/Breadcrumb';
import Title from '../../components/Layout/UI/Title';
import IntroductionContent from './IntroduceContent';

function IntroducePage() {
  return (
    <div>
      <Breadcrumb pathnames={[{ label: 'Giới thiệu', link: '' }]} />

      <Title title="Giới thiệu" />

      <div className="mt-3 flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
        {/* Content Section */}
        <div className="w-full lg:w-4/5">
          <IntroductionContent />
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
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
