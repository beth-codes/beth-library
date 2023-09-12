import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

import Edit from './edit';

registerBlockType('beth-blocks/dos-dont', {
   title: __('Dos Dont', 'beth'),
   icon: 'admin-customizer',  
   category: 'beth',
   attributes: {
      option:{
         type:'string',
         default: 'dos',
      },
      content: {
          type: 'string',
          source: 'html',
          selector: ['h2'],
          default: __('Dos', 'beth'),
      },
  },
   edit : Edit,
   save( ) {

      return (
            // Saves <h2>Content added in the editor...</h2> to the database for frontend display
         <div>
            <InnerBlocks.Content/>
            
         </div>
      ); 
  },
  
});