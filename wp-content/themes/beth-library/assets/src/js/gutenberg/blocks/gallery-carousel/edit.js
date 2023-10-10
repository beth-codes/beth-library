
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */

const BockEdit = ({className, attributes, setAttributes }) => {
   const ALLOWED_BLOCKS=['core/image'];
   const TEMPLATE=[
      // ['core/columns', {className: 'gallery-carousel' }, [
         ['core/column', {className: 'gallery-carousel-slide' }, [
            ['core/image', {className: 'gallery-carousel-slide-img img' }],
            ['core/paragraph', {className: 'caption', placeholder: '<This is a caption for the FIRST slide'}]
         ]],
         ['core/column', {className: 'gallery-carousel-slide' }, [
            ['core/image', {className: 'gallery-carousel-slide-img img' }],
            ['core/paragraph', {className: 'caption', placeholder: '<This is a caption for the FIRST slide'}]
         ]],
         ['core/column', {className: 'gallery-carousel-slide' }, [
            ['core/image', {className: 'gallery-carousel-slide-img img' }],
            ['core/paragraph', {className: 'caption', placeholder: '<This is a caption for the FIRST slide'}]
         ]],
         ['core/column', {className: 'gallery-carousel-slide' }, [
            ['core/image', {className: 'gallery-carousel-slide-img img' }],
            ['core/paragraph', {className: 'caption', placeholder: '<This is a caption for the FIRST slide'}]
         ]],
         ['core/column', {className: 'gallery-carousel-slide' }, [
            ['core/image', {className: 'gallery-carousel-slide-img img' }],
            ['core/paragraph', {className: 'caption', placeholder: '<This is a caption for the FIRST slide'}]
         ]],
         ['core/column', {className: 'gallery-carousel-slide' }, [
            ['core/image', {className: 'gallery-carousel-slide-img img' }],
            ['core/paragraph', {className: 'caption', placeholder: '<This is a caption for the FIRST slide'}]
         ]],
      // ]],



      // ['core/image', { className: 'gallery-carousel-slide-img' }],
      // ['core/image', { className: 'gallery-carousel-slide-img' }],
      // ['core/image', { className: 'gallery-carousel-slide-img' }],
      // ['core/image', { className: 'gallery-carousel-slide-img' }],
      // ['core/image', { className: 'gallery-carousel-slide-img' }]
  ];
   return (
       <div className="block-container">
           <div className="edit">
               <InnerBlocks 
                   allowedBlocks={ALLOWED_BLOCKS} 
                   template={TEMPLATE}
                   templateLock="insert"
               />
           </div>
       </div>
   );
};

export default BockEdit;
