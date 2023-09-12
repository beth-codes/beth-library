
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
      'wp-gb/inner-blocks',
      'core/button',
      'core/html'
   ];

   const TEMPLATE = [
      ["core/columns", { className: 'cta-blocjs' },
         Array.from({ length: 3 }, () =>
            ['core/column', { className: 'cta-colClassName' }, [
               ['core/image', { className: 'beth-dos-dont__heading2' }],
               ['core/paragraph', { className: 'mb-1 overline color-accent', placeholder: 'Overline' }],
               ['core/heading', {
                  level: 3, className: 'h1',
                  placeholder: 'Enter title2...'
               }],
               ['core/paragraph', { className: 'subtitle', placeholder: 'Subtitle' }],
               ['core/html', {
                  className: 'content', placeholder: 'Enter side content2...'
               }],
               ['core/button', {
                  placeholder: 'Button Tex2t...'
               }],
               
            ]],

         )
      ],
   ];

   
   return (
      <div className='hhh'>
         <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            templateLock="insert"
         />
      </div>
   )
}

export default BockEdit;