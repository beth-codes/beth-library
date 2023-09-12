
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
      'core/button'
   ];

   //Rewritten with loop below
   // const TEMPLATE = [

   //    ['core/columns', { className: 'cta-blocjs' }, [
   //       ['core/column', { className: 'cta-colClassName' }, [
   //          ['core/image', {className: 'beth-dos-dont__heading'}],
   //          ['core/paragraph', {
   //             placeholder: 'Enter side content...', className: 'beth-dos-dont__heading',
   //          }],
   //          ['core/button', {
   //             placeholder: 'Button Text...', className: 'beth-dos-dont__btn'
   //          }],
   //       ]],

   //       ['core/column', { className: 'cta-colClassName' }, [
   //          ['core/image'],
   //          ['core/paragraph', {
   //             placeholder: 'Enter side content...'
   //          }],
   //          ['core/button', {
   //             placeholder: 'Button Text...'
   //          }],
   //       ]],


   //       ['core/column', { className: 'cta-colClassName' }, [
   //          ['core/heading', {
   //             level: 3,
   //             placeholder: 'Enter side title...'
   //          }],
   //          ['core/paragraph', {
   //             placeholder: 'Enter side content...'
   //          }],
   //          ['core/button', {
   //             placeholder: 'Button Text...'
   //          }],
   //       ]],
   //    ]]
   //    ,
   // ]

   const TEMPLATE = [
      ["core/columns", { className: 'cta-blocjs' },
         Array.from({ length: 3 }, () =>
            ['core/column', { className: 'cta-colClassName' }, [
               ['core/image', { className: 'beth-dos-dont__heading' }],
               ['core/paragraph', { placeholder: 'Enter side content...', className: 'beth-dos-dont__para' }],
               ['core/button', { placeholder: 'Button Text...', className: 'beth-dos-dont__btn' }],
            ]]
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