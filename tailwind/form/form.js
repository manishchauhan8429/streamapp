import {
    Formik,
    Form,
    } from "formik";
import {Button} from "../";
import * as yup from "yup";
const form = ({children,...rest}) =>{
    const schema = yup.object({
        email: yup.string().required("Username is required").email("please enter vailid email"),
        password:yup.string().required("Password is required "),
        mobile:yup.string().required(" this fuiled is required"),
        fullname:yup.string().required(" this fuiled is required")
    });
    const defaultValues = {
        email : '',
        password: ''
    }
    const onSubmit = (value) =>{
        console.log(value);
   }
    const design = (
        
        <Formik
            initialValues={defaultValues} 
            validationSchema={schema} 
            {...rest}
            
        >
        {
         (formik)=>{
            return (
                <Form>
                    {children}
                    <div>
                    <Button type="submit"  theme="error"  >SUBMIT</Button>
                    </div>
                </Form>
            )
         }
       }
        </Formik>
    );
    return design;
}
export default form ;