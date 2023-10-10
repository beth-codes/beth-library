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
      'core/button'
   ];

   const TEMPLATE = [ [ 'core/columns', {className: 'img-content-container'}, [
      [ 'core/column', {className: 'img-content-image'}, [
         [ 'core/image', {className: 'img'} ],
      ] ],
      [ 'core/column', {className: 'img-content-text'}, [
         [ 'core/paragraph', {
            className: 'mb-1 overline color-acccent',
            placeholder: 'Overline...'
         } ],
         [ 'core/heading', {
            level: 2,
            placeholder: 'Heading...'
         } ],
         [ 'core/paragraph', {
            className: 'img-content-para',
            placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
         } ],
         ['core/column', {className: 'buttons button-container'},  Array.from({ length: 2 }, () =>
         [ 'core/button', {
            className: 'button',
            placeholder: 'Button Text...'
         } ],
         )],
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