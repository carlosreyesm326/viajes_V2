import express from "express";
import {
  pagInicio,
  pagNosotros,
  pagTestimoniales,
  pagViajes,
  pagDetalleViaje,
} from "../controllers/paginas.js";
import { guardarTestimoniales } from "../controllers/testimonialesController.js";

const router = express.Router();

//ROUTER FOR ENDPOINTS
router.get("/", pagInicio);
router.get("/nosotros", pagNosotros);
router.get("/viajes", pagViajes);
router.get("/viajes/:detalle", pagDetalleViaje);
router.get("/testimoniales", pagTestimoniales);
router.post("/testimoniales", guardarTestimoniales);
export default router;
