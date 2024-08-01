import Breadcrumb from '../../components/Layout/UI/Breadcrumb';

function DiplomaSearch() {
  return (
    <div>
      <Breadcrumb
        pathnames={[
          { label: 'Tra cứu', link: '/tra-cuu-van-bang' },
          { label: 'Tra cứu văn bằng', link: '' },
        ]}
      />
    </div>
  );
}

export default DiplomaSearch;
