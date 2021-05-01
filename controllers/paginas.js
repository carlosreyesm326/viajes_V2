import { viaje } from "../models/viaje.js";
import { testimoniales } from "../models/testimoniales.js";

const pagInicio = async (req, res) => {
  const promiseDB = [];
  promiseDB.push(viaje.findAll({ limit: 3 }));
  promiseDB.push(testimoniales.findAll({ limit: 3 }));
  try {
    const resultado = await Promise.all(promiseDB);
    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimonios: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};
const pagNosotros = (red, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};
const pagTestimoniales = async (red, res) => {
  try {
    const testimonios = await testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimonios,
    });
  } catch (error) {
    console.log(error);
  }
};
const pagViajes = async (red, res) => {
  const viajes = await viaje.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes,
  });
};

const pagDetalleViaje = async (red, res) => {
  const { detalle } = red.params;
  console.log(detalle);
  try {
    const vuelo = await viaje.findOne({ where: { slug: detalle } });
    res.render("viajeDetalle", {
      pagina: "Informacion viaje ",
      vuelo,
    });
  } catch {}
};
export { pagInicio, pagNosotros, pagTestimoniales, pagViajes, pagDetalleViaje };
