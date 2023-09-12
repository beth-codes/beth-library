import { InnerBlocks } from '@wordpress/block-editor';
import { blockColumns } from './templates';

const Edit = () => {
const ALLOWED_BLOCKS = ['core/group'];
const TEMPLATE = [
   [
      'core/group',
      {
         className: 'beth-dos-dont__group',
      },
      blockColumns,
   ],
]
   return (<div className="beth-dos-dont">
     <InnerBlocks 
      allowedBlocks={ALLOWED_BLOCKS}
      template={TEMPLATE}
     />
   </div>)
}

export default Edit;