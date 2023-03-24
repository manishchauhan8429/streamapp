import {
    Formik,
    Form,
    Field,
    ErrorMessage} from "formik";
    import * as yup from "yup";
    export const FormIndex = ()=>{
        const schema = yup.object({
            username: yup.string().required("Username is required").email("please enter vailid email"),
            password:yup.string().required("Password is required ")
        })
        const defaultValues = {
            username : '',
            password: ''
        }
        const onSubmit = (value) =>{
             console.log(value);
        }
        const design =(
            <>
             <Formik
             initialValues={defaultValues} 
             onSubmit={onSubmit}
             validationSchema={schema} >
                  { (formik) =>{
                    // return console.log(formik);
                    return (
                        <Form className="m-20 flex flex-col gap-4 w-4/12 p-5">
                        <Field type="email" name="username" placeholder="Username" className={formik.errors.username ? "border border-red-500" : null } />
                        <ErrorMessage name="username" component="p" /> 
                        <Field type="password" name="password" placeholder="********" className={formik.errors.password ? "border border-red-500" : null } />
                        <ErrorMessage name="password" component="h1" /> 
                        <div>
                         <button type="submit" disabled={!(formik.dirty && formik.isValid)} className="bg-blue-500 px-6 py-2">Login</button>
                        </div>
                    </Form>
                 
                    );
                }}
                </Formik>
            </>
        );
    return design;
    }
    