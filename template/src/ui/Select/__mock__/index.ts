export const mockOptionsSimple = [
  {
    label: 'Item 1',
    value: '1',
  },
  {
    label: 'Item 2',
    value: '2',
  },
  {
    label: 'Item 3',
    value: '3',
  },
  {
    label: 'Item 4',
    value: '4',
  },
];

export const mockOptionsGrouped = [
  {
    label: 'Group 1',
    options: [
      { value: '1', label: 'Item 1' },
      {
        value: '2',
        label: 'Item 2',
        description: 'description',
      },
    ],
  },
  {
    label: 'groupBorder',
    options: [
      { value: '3', label: 'Item 3' },
      { value: '4', label: 'Item 4' },
    ],
  },
];
