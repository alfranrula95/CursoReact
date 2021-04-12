import { Formik } from 'formik';
import * as Yup from 'yup';

/*
export default function FormularioFormik() {
    let initialValues = { nombre: '', descripcion: '', localidad: '' };

    let manejarEnvio = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log("%cDatos del formulario 📑", "color: green")
            console.log(`Nombre: ${values.nombre}`);
            console.log(`Descripción: ${values.descripcion}`);
            console.log(`Localidad: ${values.localidad}`);

            setSubmitting(false);
        }, 1000);
    }
    return (
        <Formik initialValues={initialValues} onSubmit={manejarEnvio}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} className="Formulario">
                    <strong>Mi formulario con Formik</strong>

                    <input className="Elemento" placeholder="Introduce tu nombre..." type="text"
                        name="nombre" onChange={handleChange} value={values.nombre} />

                    <textarea className="Elemento" placeholder="Introduce tu descripción..."
                        name="descripcion" onChange={handleChange} value={values.descripcion} />

                    <select className="Elemento" name="localidad"
                        onChange={handleChange} value={values.localidad}>
                        <option value="Málaga">Málaga</option>
                        <option value="Granada">Granada</option>
                        <option value="Sevilla">Sevilla</option>
                    </select>

                    <button className="Elemento" type="submit" disabled={isSubmitting}>Enviar</button>
                </form>
            )}
        </Formik>
    );
}
*/

export default function FormularioFormikYUP() {

    let initialValues = { nombre: '', descripcion: '', localidad: '' };

    let manejarEnvio = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log("%cDatos del formulario 📑", "color: green")
            console.log(`Nombre: ${values.nombre}`);
            console.log(`Descripción: ${values.descripcion}`);
            console.log(`Localidad: ${values.localidad}`);

            setSubmitting(false);
        }, 1000);
    }

    const validaciones = Yup.object().shape({
        nombre: Yup.string()
            .required('Por favor, escribe tu nombre.')
            .min(3, 'Mínimos 3 carácteres.'),
        descripcion: Yup.string()
            .required('Por favor, escribe una descripción.')
            .min(5, 'Mínimos 5 carácteres.')
            .max(255, 'Máximos 255 carácteres.'),
        localidad: Yup.string()
            .required("Por favor, incluye tu localidad")
            .oneOf(['Málaga', 'Granada', 'Sevilla']),

        errors: {
            nombre: 'Por favor, escribe tu nombre.' | 'Mínimos 3 carácteres.',
            descripción: 'Por favor, una descripcion.' | 'Mínimos 5 carácteres.',
            localidad: 'Por favor, selecciona tu localidad.',
        },



    });

    return (
        <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={manejarEnvio}>
            {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                <form onSubmit={handleSubmit} className="Formulario">
                    <strong>Mi formulario con Formik</strong>

                    <input className="Elemento" placeholder="Introduce tu nombre..."
                        type="text" name="nombre" onChange={handleChange}
                        value={values.nombre}
                    />

                    {errors.nombre ? (<div>{errors.nombre}</div>) : null}
                    <textarea className="Elemento" placeholder="Introduce tu descripción..."
                        name="descripcion" onChange={handleChange} value={values.descripcion} />

                    {errors.descripcion ? (<div>{errors.descripcion}</div>) : null}
                    <select className="Elemento" name="localidad"
                        onChange={handleChange} value={values.localidad}>
                        <option value="Málaga">Málaga</option>
                        <option value="Granada">Granada</option>
                        <option value="Sevilla">Sevilla</option>
                    </select>
                    {errors.localidad ? (<div>{errors.localidad}</div>) : null}
                    <button className="Elemento" type="submit" disabled={isSubmitting}>Enviar</button>

                </form>
            )}
        </Formik>
    );
}