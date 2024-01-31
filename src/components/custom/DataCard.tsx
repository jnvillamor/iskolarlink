import { BookmarkIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Internship } from '@/models/internship';

const Tags = ({ tag }: { tag: string }) => {
  return <div className='rounded-lg py-1 px-2 bg-background text-xs text-secondary font-medium text-nowrap'>{tag}</div>;
};

const DataCard = (internship: Internship) => {
  return (
    <div className='w-[320px] 2xl:w-[400px] p-6 border shadow-custom flex flex-col justify-between'>
      <div className='flex gap-3 items-center mb-3'>
        <div className='w-[90px]'>
          <img src={internship.image} alt={internship.title} className='w-full aspect-square' />
        </div>
        <div>
          <p className='font-bold text-sm'>{internship.title}</p>
          <p className='text-secondary text-xs'>{internship.company}</p>
          <p className='text-secondary text-xs'>{internship.location}</p>
        </div>
      </div>
      <div className='flex gap-2 overflow-x-auto'>
        <Tags tag={internship.role} />
        <Tags tag={internship.work_setup} />
        <Tags tag={internship.compensation} />
        {internship.skill_requirements?.map((skill) => (
          <Tags key={skill} tag={skill} />
        ))}
      </div>
      <div className='line-clamp-2 pt-1'>
        <p className='text-xs text-secondary'>{internship.description}</p>
      </div>
      <div className='mt-3 pt-3 border-t border-t-secondary flex justify-between items-center'>
        <div className='text-xs text-secondary font-semibold'>{internship?.rate ? `PHP ${internship.rate}` : 'Unpaid'}</div>
        <div className='flex gap-3'>
          <Button className='text-xs rounded-lg py-1 px-2 h-fit'>Apply Now</Button>
          <BookmarkIcon />
        </div>
      </div>
    </div>
  );
};

export default DataCard;
