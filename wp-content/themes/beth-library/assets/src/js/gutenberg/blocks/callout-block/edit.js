
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import { blockColumns } from './templates';
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
      'beth-blocks/inner-blocks',
      'core/button'
   ];

   const TEMPLATE = [
      ["core/columns", { className: 'callouts' },
         Array.from({ length: 3 }, () =>
            ['core/column', { className: 'callout' }, [
               ['core/image', { className: 'beth-dos-dont__heading' }],
               
               ['core/column', {className: 'beth-dos-dont__para'}, [
                  ['core/heading', { placeholder: 'Heading...', className: 'beth-dos-dont__paras' }],
                  ['core/paragraph', { placeholder: 'Enter side content...', className: 'beth-dos-dont__paras' }],
                  ['core/button', { placeholder: 'Button Text...', className: 'beth-dos-dont__btns' }],
               ]],
               
            ]]
         )
      ],
   ];

   return (
      <div className='block-container'>
         <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
   
         />
      </div>
   )
}

export default BockEdit;