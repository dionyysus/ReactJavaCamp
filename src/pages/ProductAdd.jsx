import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
export default function ProductAdd() {

    const initialValues = { ProductName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı girilmesi zorunludur."),
        unitPrice: Yup.number().required("Ürün fiyatı girilmesi zorunludur")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {(values) =>{
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
                    {/* <FormField>
                        <Field name="productName" placeholder="Ürün Adı"></Field>
                        <ErrorMessage name = "productName" render = { error=>
                            <Label pointing basic color = "red" content = {error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                        <ErrorMessage name = "unitPrice" render = { error=>
                            <Label pointing basic color = "red" content = {error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
