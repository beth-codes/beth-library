
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
      'core/button'
   ];
   const TEMPLATE = [
      ["core/columns", { className: 'compact-cta-blocks' },
         Array.from({ length: 6 }, () =>
            ['core/column', { className: 'compact-container' }, [
               ['core/image', { className: 'img' }],

               ['core/column', {className: 'compact-article'}, [
                  ['core/heading', { placeholder: 'Header...', className: 'h3' }],
                  ['core/paragraph', { placeholder: 'Enter side content...', className: 'compact-paragraph' }],
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