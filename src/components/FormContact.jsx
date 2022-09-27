/* eslint-disable react/prop-types */
import React from "react";
import useCollapse from 'react-collapsed';

function Form(props) {
  const {
    iframeSource = '<iframe frameborder="0" style="height:800px;width:99%;border:none;" src="https://forms.zohopublic.com/soulshoescomrciodecaladoseaces/form/Entreemcontato/formperma/hE_e4YMN_n8b6OKHd82wt8L9NkEEsUDBRkjPNnoRJ4w"></iframe>'
  } = props;
  return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}

function FormContact() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible border-1 py-4 px-3 border-gray-800">
      <div className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" {...getToggleProps()}>
        {isExpanded ? "Close" : "> Entre em Contato"}
      </div>
      <div {...getCollapseProps()}>
        <Form />
      </div>
    </div>
  );
}

export default FormContact;
