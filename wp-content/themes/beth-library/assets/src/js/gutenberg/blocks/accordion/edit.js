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
      'core/column',
      'core/heading',
      'core/button',
      'core/html'
   ];

   const TEMPLATE = [
      ["core/columns", { className: 'accordion-content' }, [

         [ 'core/column', {className: 'content-inner'}, [
            [ 'core/paragraph', {
               className: 'overline', placeholder:'Overline'
            } ],
            [ 'core/heading', {
               className: 'heading', placeholder: 'Heading', level: 2
            } ],
            [ 'core/paragraph', {
               className: 'subtitle', placeholder: 'Subtitle'
            } ],
            [ 'core/html', {
               className: 'content-wrap', placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            } ],
            ['core/column', {className: 'buttons button-container'},  Array.from({ length: 2 }, () =>
            [ 'core/button', {
               className: 'button',
               placeholder: 'Button Text...'
            } ],
            )],
            
         ] ],

         ['core/column', {className: 'accordion'},  Array.from({ length: 6 }, () =>
         ['core/column', { className: 'accordion-group' }, [
            
            ['core/column', {className: 'accordion-title has-icon'}, [
               ['core/heading', { placeholder: 'Question', className: 'heading h2', level: 3}],
               ['core/html', { placeholder: 'Enter SVG', className: 'icon' }],
            ]],
            ['core/paragraph', { className: 'accordion-content', placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }],
         ]],
      )]

         
      ] ]
   ];

   // const TEMPLATE = [ [ 'core/columns', {className: 'form-content'}, [
   //    // ['core/columns', {className: 'content'}, [

   //       [ 'core/column', {className: 'content-inner'}, [
   //          [ 'core/paragraph', {
   //             className: 'overline'
   //          } ],
   //          [ 'core/heading', {
   //             className: 'heading'
   //          } ],
   //          [ 'core/paragraph', {
   //             className: 'subtitle'
   //          } ],
   //          [ 'core/html', {
   //             className: 'content-wrap'
   //          } ],
   //          ['core/button', {
   //             placeholder: 'Button Tex2t...'
   //          }],
   //       ] ],
         

   //    // ]],

   //    [ 'core/column', {className: 'accordion'}, [
   //       Array.from({ length: 6 }, () =>
   //       ['core/column', { className: 'accordion-group' }, [
            

   //          ['core/column', {className: 'accordion-title has-icon'}, [
   //             ['core/heading', { placeholder: 'Header...', className: 'beth-dos-dont__paras' }],

   //             ['core/button', { placeholder: 'Enter side content...', className: 'button' }],
   //          ]],

   //          ['core/html', { className: 'accordion-content' }],
   //       ]],
   //    )
   //    ] ],
   // ] ] ];

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