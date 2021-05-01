import { testimoniales } from "../models/testimoniales.js";

const guardarTestimoniales = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errores = [];
  if (correo.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }
  console.log(errores);
  if (errores.length > 0) {
    const testimonios = await testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimonios,
    });
  } else {
    try {
      await testimoniales.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimoniales };
