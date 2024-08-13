import { Schema } from './schema';
import { DataTableFilterField } from './types';

export const data = [
  {
    name: 'Biology',
    public: true,
    active: true,
    regions: ['HS', 'MS', 'ES'],
    tags: ['science']
  },
  {
    name: 'Chemistry',
    public: true,
    active: true,
    regions: ['HS', 'MS'],
    tags: ['science']
  },
  {
    name: 'Physics',
    public: false,
    active: false,
    regions: ['HS'],
    tags: ['science', 'math']
  },
  {
    name: 'Algebra',
    public: false,
    active: true,
    regions: ['HS', 'MS'],
    tags: ['math']
  },
  {
    name: 'Geometry',
    public: true,
    active: true,
    regions: ['HS', 'MS'],
    tags: ['math']
  },
  {
    name: 'English',
    public: false,
    active: true,
    regions: ['HS', 'MS', 'ES'],
    tags: ['literature']
  },
  {
    name: 'World History',
    public: true,
    active: true,
    regions: ['HS'],
    tags: ['history']
  },
  {
    name: 'American Literature',
    public: true,
    active: true,
    regions: ['HS'],
    tags: ['literature']
  },
  {
    name: 'Calculus',
    public: true,
    active: false,
    regions: ['HS'],
    tags: ['math']
  },
  {
    name: 'Earth Science',
    public: false,
    active: true,
    regions: ['MS', 'ES'],
    tags: ['science']
  },
  {
    name: 'Creative Writing',
    public: false,
    active: true,
    regions: ['HS', 'MS'],
    tags: ['literature']
  },
  {
    name: 'Ancient Civilizations',
    public: true,
    active: true,
    regions: ['MS'],
    tags: ['history']
  }
] satisfies Schema[];

export const filterFields = [
  {
    label: 'Public',
    value: 'public',
    options: [
      { label: 'true', value: true },
      { label: 'false', value: false }
    ]
  },
  {
    label: 'Active',
    value: 'active',
    options: [
      { label: 'true', value: true },
      { label: 'false', value: false }
    ]
  },
  {
    label: 'School Level',
    value: 'regions',
    options: [
      { label: 'ES', value: 'ES' },
      { label: 'MS', value: 'MS' },
      { label: 'HS', value: 'HS' }
    ]
  },
  {
    label: 'Subject Area',
    value: 'tags',
    // REMINDER: "use client" needs to be declared in the file - otherwise getting serialization error from Server Component
    // component: (props: Option) => {
    //   if (typeof props.value === 'boolean') return null;
    //   return (
    //     <div className='flex w-full items-center justify-between gap-2'>
    //       <span className='truncate font-normal'>{props.value}</span>
    //       <span
    //         className={cn('h-2 w-2 rounded-full', tagsColor[props.value].dot)}
    //       />
    //     </div>
    //   );
    // },
    options: [
      { label: 'Math', value: 'math' },
      { label: 'Science', value: 'science' },
      { label: 'Literature', value: 'literature' },
      { label: 'History', value: 'history' }
    ]
  }
] satisfies DataTableFilterField<Schema>[];
