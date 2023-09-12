
const getBlockColumn = (optionVal, colClassNmae, heading) => {
   return [
      'core/column',
      {className: colClassNmae},
      [
         [
            'beth-blocks/heading',
            {
               className: 'beth-dos-dont__heading',
               option: optionVal,
               content: heading,
            }
         ],
         [
            'core/list',
            {
               className: 'beth-dos-dont__list'
            }
         ]
      ]
   ]
}

export const blockColumns = [
   [
      'core/columns',
      {
         className: 'beth-dos-dont__column'
      },
      [
         getBlockColumn('dos', 'beth-dont__col-one', 'DOS'),
         getBlockColumn('dos', 'beth-dont__col-two', 'DONT'),
      ],
      
   ],
]