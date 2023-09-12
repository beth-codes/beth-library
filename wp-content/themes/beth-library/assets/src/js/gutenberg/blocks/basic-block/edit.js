// import { useBlockProps, RichText } from '@wordpress/block-editor';
// import { __ } from '@wordpress/i18n';

// const Edit = ({className, attributes, setAttributes}) => {
//    const blockProps = useBlockProps();
//    const {content} = attributes;
//    return (<div className="basic-block">
//       {/* <span className="beth-icon-heaing__heading"> */}
//          <RichText
//           { ...blockProps }
//             tagName="h2"
//             className = {className}
//             value={content}
//             onChange={(content)=> setAttributes({content})}
//             placeholder={__('Basic...', 'beth')}
//          />
//       {/* </span> */}
//    </div>)
// }

// export default Edit;



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
      'wp-gb/inner-blocks',
      'core/button'
   ];

   const TEMPLATE = [ [ 'core/columns', {}, [
      [ 'core/column', {}, [
         [ 'core/image' ],
      ] ],
      [ 'core/column', {}, [
         [ 'core/heading', {
            level: 3,
            placeholder: 'Enter side title...'
         } ],
         [ 'core/paragraph', {
            placeholder: 'Enter side content...'
         } ],
         [ 'core/button', {
            placeholder: 'Button Text...'
         } ],
      ] ],
   ] ] ];

   return (
      <div className='hhh'>
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