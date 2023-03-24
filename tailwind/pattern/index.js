import Style from "./pattern.module.css";
export const  PatternOne = ({children})=>{
    const design = (
        <>
         <div className={Style.one}>
        {children}
        </div>
        </>
    );
    return design;
}
export const  Patterntwo = ({children})=>{
    const design = (
        <>
         <div className={Style.two}>
        {children}
        </div>
        </>
    );
    return design;
}