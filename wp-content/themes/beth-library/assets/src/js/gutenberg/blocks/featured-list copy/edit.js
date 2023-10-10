
import { InnerBlocks } from '@wordpress/block-editor';
/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
const BockEdit = (colClassName) => {
   const ALLOWED_BLOCKS = [
      'core/image',
      'core/paragraph',
      'core/columns',
      'core/column',
      'core/heading',
      'core/button',
      'core/html'
   ];
   const TEMPLATE = [
      ["core/columns", { className: 'grid-list' },
         Array.from({ length: 6 }, () =>
            ['core/column', { className: 'grid-list-item ' }, [
               ['core/html', { className: 'svg-cont list-counter' }],

               ['core/column', {className: 'list-content'}, [
                  ['core/heading', { level: 3, placeholder: 'Lorem ipsum', className: 'grid-list-header' }],
                  ['core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur ', className: 'grid-list-para' }],
               ]]
            ]],
         )
      ],
   ];

   return (
      <div className='block-container'>
         <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            templateLock="insert"
         />
      </div>
   )
}

export default BockEdit;