// import { DoubleChevRight, HomeIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../assets/icons/HomeIcon';
import { DoubleChevRightIcon } from '../../../assets/icons';
import { cn } from '../../../utils/common';
// import { cn } from '@/lib/utils';
// import Link from 'next/link';

const Breadcrumb = ({
  pathnames,
}: {
  pathnames: { label: string; link: string }[];
}) => (
  <nav className="my-3">
    <ol className="lg:flex hidden space-x-2">
      {pathnames.map(({ label, link }, index) => {
        const isLast = index === pathnames.length - 1;

        return (
          <li key={index} className="flex items-center">
            {isLast ? (
              <span
                className={cn('line-clamp-1', {
                  'text-gradient flex items-center gap-x-1':
                    pathnames.length === 1,
                })}
              >
                {pathnames.length === 1 && <HomeIcon />} {label}
              </span>
            ) : (
              <Link
                to={link}
                className="text-gradient flex items-center gap-x-1"
              >
                <HomeIcon /> {label}
              </Link>
            )}
            {!isLast && (
              <span className="mx-2">
                <DoubleChevRightIcon />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
