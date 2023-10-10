//@ts-check
/**
 *
 * @param {string} dataAttr
 *@param {string}[value]
 *@returns {boolean}
 */
 export const doesHtmlExist = (dataAttr, value) => {
    const selector = value 
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;
    const element = document.querySelector(selector);
  
    const isHtmlElement = element instanceof HTMLElement;
   
    return isHtmlElement ;
  };
  
   /**
   *@param {object} props
   * @param {string} props.dataAttr
   *@param {string}[props.value]
   * @param {HTMLElement}[props.target]
   *@returns {HTMLElement}
   */
   export const getHtml = (props) => {
    const { dataAttr , value, target}= props

    const selector = value 
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;
  

    const scope= target ||  document
      console.log("Selector:", selector);
    const element = scope.querySelector(selector);
    console.log("Element:", element);
  
    const isHtmlElement = element instanceof HTMLElement;
    if (!isHtmlElement) {
      throw new Error(`${selector} attribute not found in Html`);
    }
  
    return element;
  };
  