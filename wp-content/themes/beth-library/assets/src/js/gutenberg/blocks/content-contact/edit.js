import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
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
      'core/heading',
      'core/button',
      'core/html'
   ];

   const TEMPLATE = [ [ 'core/columns', {className: 'form-content'}, [
      ['core/columns', {className: 'content'}, [

         [ 'core/column', {className: 'content-inner'}, [
            [ 'core/paragraph', {
               className: 'overline'
            } ],
            [ 'core/heading', {
               className: 'heading'
            } ],
            [ 'core/paragraph', {
               className: 'subtitle'
            } ],
            [ 'core/html', {
               className: 'content-wrap'
            } ],
            ['core/button', {
               placeholder: 'Button Tex2t...'
            }],
         ] ],
         

      ]],

      [ 'core/column', {className: 'form'}, [
         [ 'core/heading', {
            level: 3,
            placeholder: 'Enter side title...'
         } ],
         [ 'core/html', {
            placeholder: 'Enter form tag...'
         } ],
      ] ],
   ] ] ];

   return (
      <div className='block-container'>
         <InnerBlocks
         className = {className}
            allowedBlocks={ ALLOWED_BLOCKS }
            template={ TEMPLATE }
            templateLock="insert"
         />
      </div>
   )
}

export default BockEdit;