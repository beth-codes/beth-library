
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import { blockColumns } from './templates';
/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
const BockEdit = (className) => {
   const ALLOWED_BLOCKS = [
      'core/image',
      'core/paragraph',
      'core/columns',
      'core/column',
      'core/heading',
      'core/button',
   ];

   const TEMPLATE = [
      ["core/columns", { className: 'column-countent-block mobile-scroll' },
         Array.from({ length: 3 }, () =>
            ['core/column', { className: 'column-countent-item' }, [
               ['core/image', { className: 'img' }],
               ['core/column', {className: 'column-countent-article'}, [
                  ['core/paragraph', { className: 'mb-1 overline color-accent', placeholder: 'Overline' }],
                  ['core/heading', {
                     level: 3, className: 'h1',
                     placeholder: 'Header...'
                  }],
                  ['core/paragraph', { className: 'subtitle', placeholder: 'Subtitle' }],
                  ['core/paragraph', {
                     className: 'column-content-para', 
                     placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
                  }],
                  ['core/column', {className: 'buttons button-container'},  Array.from({ length: 2 }, () =>
                  [ 'core/button', {
                     className: 'button',
                     placeholder: 'Button Text...'
                  } ],
                  )],
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