import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit = ({className, attributes, setAttributes}) => {
   const {content} = attributes;
   const blockProps = useBlockProps();
   return (<div className="beth-icon-heading">
      <span className="beth-icon-heaing__heading">
         <RichText
         { ...blockProps }
            tagName="h2"
            className = {className}
            value={content}
            onChange={(content)=> setAttributes({content})}
            placeholder={__('heading...', 'beth')}
         />
      </span>
   </div>)
}

export default Edit;