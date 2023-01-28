import React from "react";
import "./main.scss";
import imgMap from "../../Images/vt.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Main() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Required"),
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8080/product", values).then(() => {
        alert("Post created");
      });

      formik.resetForm();
    },
  });
  return (
    <div>
      <section className="your__plumber">
        <div className="plumper-container">
          <div className="plumber_text">
            <h1>WE'RE YOUR PLUMBER</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              nemo esse. Voluptatum tempore explicabo, officia iusto maxime
              numquam assumenda, laboriosam aspernatur corporis labore repellat
              laborum, odio unde aperiam saepe ipsum?
            </p>
            <div>
              <button>BUY NOW FOR $9.99</button>
            </div>
          </div>
        </div>
      </section>

      <section className="crud__section">
        <div className="crud__section-container">
          <div className="crud__cards">
            <div className="card">
              <div className="img__div">
                <img
                  src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png"
                  alt=""
                />
              </div>

              <h3>Maintenance</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta est non molestias at nemo, odio labore adipisci, illum,
                provident ipsum odit et officiis ea inventore laborum iure eius
                quas.
              </p>
            </div>
            <div className="card">
              <div className="img__div">
                <img
                  src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png"
                  alt=""
                />
              </div>

              <h3>Maintenance</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta est non molestias at nemo, odio labore adipisci, illum,
                provident ipsum odit et officiis ea inventore laborum iure eius
                quas.
              </p>
            </div>
            <div className="card">
              <div className="img__div">
                <img
                  src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png"
                  alt=""
                />
              </div>

              <h3>Maintenance</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta est non molestias at nemo, odio labore adipisci, illum,
                provident ipsum odit et officiis ea inventore laborum iure eius
                quas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="got_impressed">
        <div className="got_impressed-container">
          <div className="got_impressed-text">
            <h1>Got Impressed to our features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button>GET A FREE QUOTE</button>
          </div>
        </div>
      </section>

      <section className="our__ceo">
        <div className="our__ceo-container">
          <div className="what-our-client">
            <h1>What our Client’s Say about us</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>

          <div className="carousel"></div>
        </div>
      </section>

      <section className="form_section">
        <div className="form_section-container">
          <div className="map">
            <img src={imgMap} alt="MapImage" />
          </div>
          <div className="inputs">
            <form onSubmit={formik.handleSubmit}>
              <input
                placeholder="Enter your name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.name && formik.errors.name ? (
                <span>{formik.errors.name}</span>
              ) : null}
              <input
                placeholder="Enter email address"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.email && formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : null}
              <input
                placeholder="message"
                className="message-input"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.message && formik.errors.message ? (
                <span>{formik.errors.message}</span>
              ) : null}

              <button>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
