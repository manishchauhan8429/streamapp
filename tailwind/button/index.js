const sample = {
  "o-primary": "border border-teal-600 px-4 py-2 text-teal-600 rounded-sm shadow-sm ",
  "o-secondary": "border border-blue-600 px-4 py-2 text-blue-600 rounded-sm shadow-sm ",
  "o-info": "border border-cyan-600 px-4 py-2 text-cyan-600 rounded-sm shadow-sm ",
  "o-error": "border border-red-600 px-4 py-2 text-red-600 rounded-sm shadow-sm ",
  "o-warning": "border border-orange-600 px-4 py-2 text-orange-600 rounded-sm shadow-sm ",
  "o-success": "border border-green-600 px-4 py-2 text-green-600 rounded-sm shadow-sm ",
  "primary": " bg-teal-600 px-4 py-2 text-white rounded-sm shadow-sm ",
  "secondary": "bg-blue-600 px-4 py-2 text-white rounded-sm shadow-sm ",
  "info": "bg-cyan-600 px-4 py-2 text-white rounded-sm shadow-sm ",
  "error": "bg-red-600 px-4 py-2 text-white rounded-sm shadow-sm ",
  "warning": "bg-orange-600 px-4 py-2 text-white rounded-sm shadow-sm ",
  "success": "bg-green-600 px-4 py-2 text-white rounded-sm shadow-sm "
}
const button = ({children,theme="o-succesas", onClick = null,onMouseOver=null, className=null}) =>{
    const design =(
      <>
      <button className={sample[theme]+" "+className} onClick={onClick} onMouseOver={onMouseOver} >{children}</button>
    
      </>
    );
    return design;
}
export default button;