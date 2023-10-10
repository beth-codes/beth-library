
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

   const TEMPLATE = [ [ 'core/columns', {className: 'full-cta'}, [
      [ 'core/column', {className: 'full-cta-container'}, [
         ['core/image', {className: 'block-bg-img'}],

         ['core/column', {className: 'full-cta-content'}, [
            [ 'core/paragraph', {className: 'mb-1 overline color-accent', placeholder: 'Overline'}],
            [ 'core/heading', {
               level: 2, className:'h1',
               placeholder: 'Title'
            } ],
            [ 'core/paragraph', {className: 'subtitle', placeholder: 'Subtitle'}],
            [ 'core/html', { className: 'full-cta-text', placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            } ],
            ['core/column', {className: 'buttons button-container'},  Array.from({ length: 2 }, () =>
            [ 'core/button', {
               className: 'button',
               placeholder: 'Button Text...'
            } ],
            )],
            
         ]]
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