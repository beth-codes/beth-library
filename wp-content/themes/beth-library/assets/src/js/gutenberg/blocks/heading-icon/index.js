import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import Edit from './edit';

registerBlockType('beth-blocks/heading', {
   title: __('Heading Icon', 'beth'),
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
          selector: 'h2',
          default: __('Dos', 'beth'),
      },
  },
   edit : Edit,
   save( { className, attributes } ) {
      const {content} = attributes;
      return (
            // Saves <h2>Content added in the editor...</h2> to the database for frontend display
         <div className="beth-icon-heading">
            <RichText.Content tagName="h2" value={content} /><br></br>
         </div>
      ); 
  },
  
});