
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
      'beth-blocks/inner-blocks',
      'core/button',
      'core/html'
   ];

   const TEMPLATE = [ [ 'core/columns', {className: 'banner-content-block'}, [
      [ 'core/column', {className: 'banner-content-block-container'}, [
         ['core/image', {className: 'block-bg-img'}],

         ['core/column', {className: 'banner-content'}, [
            [ 'core/paragraph', {className: 'mb-1 overline color-accent', placeholder: 'Overline'}],
            [ 'core/heading', {
               level: 3, className:'h1',
               placeholder: 'Enter title...'
            } ],
            [ 'core/paragraph', {className: 'subtitle', placeholder: 'Subtitle'}],
            [ 'core/html', { className: 'content', placeholder: 'Enter side content...'
            } ],
            [ 'core/button', {
               placeholder: 'Button Text...'
            } ],

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