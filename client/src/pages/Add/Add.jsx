import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import './app.scss'

function Add() {
    const formik = useFormik({
        initialValues: {
            img: "",
            name: "",
            detail: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required !"),
            change: Yup.number().required("Required !"),
            NFTsold: Yup.number().required("Required !"),
            volume: Yup.number().required("Required !"),
        }),
        onSubmit: (values,  { resetForm }) => {
            axios.post("http://localhost:8080/api/artists", values);
             resetForm();
        },
    });

    return (
        <div >
            <div >
                <div className='add__container'> 
                <h1>Add Product</h1>
                    <form className='form' onSubmit={formik.handleSubmit}>

                        <input  placeholder="Enter image"
                            id="img"
                            name="img"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.img} />
                        {formik.touched.img && formik.errors.img ? (
                            <span>{formik.errors.img} !</span>
                        ) : null}
                        <input placeholder="Enter name"
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? (
                            <span>{formik.errors.name} !</span>
                        ) : null}
                        <input placeholder="Enter detail"
                            id="detail"
                            name="detail"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.detail} />
                        {formik.touched.detail && formik.errors.detail ? (
                            <span>{formik.errors.detail} !</span>
                        ) : null}
                       

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Add