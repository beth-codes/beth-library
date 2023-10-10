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
      ["core/columns", { className: 'cta-blocks' },
         Array.from({ length: 3 }, () =>
            ['core/column', { className: 'cta' }, [
               ['core/image', { className: 'cta-img img' }],
               ['core/column', {className: 'cta-inner'}, [
                  ['core/paragraph', { placeholder: 'Overline', className: 'overline' }],
                  ['core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', className: 'cta-title' }],
                  ['core/button', { placeholder: 'Button Text', className: 'button' }],
               ]]
               
            ]]
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