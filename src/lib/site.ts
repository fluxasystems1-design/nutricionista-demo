export const INSTAGRAM = "https://www.instagram.com/mafecerquerap.nutricion/";
export const LADY_BOSS = "https://www.instagram.com/ladybossclub_colombia/";
export const TIKTOK = "https://www.tiktok.com/@nutricion.mafecerquerap";
/** Número público de su Linktree. No es el de ventas de Fluxa. */
export const WHATSAPP = "https://wa.me/573165365822";

export const ROUTES = {
  home: "/",
  vacaciones: "/vacaciones-sin-restriccion",
  gracias: "/vacaciones-sin-restriccion/gracias",
  hormonas: "/hazte-amiga-de-tus-hormonas",
  acompanamiento: "/acompanamiento-90-dias",
} as const;

export const COHORT_START = "2026-11-23T08:00:00-05:00";

/**
 * La consulta 1:1 usa los euros que definió Mafe.
 * Vacaciones se redondea con la misma relación (~3.200 COP por euro).
 * Hormonas está en dólares: 1 USD ≈ 0,90 €, redondeado al euro (el total suma las líneas).
 * El acompañamiento de 90 días usa la misma relación de vacaciones (~3.200 COP por euro).
 */
export const PRECIOS = {
  consultaInicio: { cop: "$250.000", eur: "80 €" },
  consultaBasic: { cop: "$390.000", eur: "120 €" },
  consultaPremium: { cop: "$490.000", eur: "150 €" },
  vacacionesBasico: { cop: "$79.000", eur: "25 €" },
  vacacionesVip: { cop: "$149.000", eur: "47 €" },
  hormonasBasico: { usd: "$59", eur: "53 €" },
  hormonasPlus: { usd: "$99", eur: "89 €" },
  hormonasTotal: { usd: "$215 USD", eur: "195 €" },
  acompanamiento: { cop: "$897.000", eur: "280 €" },
  acompanamientoCuota: { cop: "$299.000", eur: "93 €" },
} as const;

export const TESTIMONIOS = [
  "Desde que comencé mi proceso he sentido ese cambio grande que quería, he mejorado mi tránsito intestinal, mi estado de ánimo, cambios físicos y además con los suplementos que me has recomendado siento cómo me ayudan... Sin duda la mejor nutricionista que pude encontrar para mi salud y mi cuerpo.",
  "Hoy me siento más segura de que puedo lograr lo que me propongo y muy feliz de poder haber cambiado mi estilo de vida a uno más saludable... Mi salud intestinal ha mejorado, me entusiasma mucho hacer desayuno, complementar mis almuerzos y hacer mis cenas.",
  "No solo me ayudaste a tener una relación sana con la comida sino que también me ayudaste a crear un hábito único... mi piel está más hermosa sin tantos granos en la cara, mi cuerpo se siente más liviano, mi cabello está más brillante.",
] as const;

export const CREDENCIALES = [
  "Nutricionista dietista, Pontificia Universidad Javeriana, Colombia",
  "Especialización en trastornos de la conducta alimentaria, CEDA, Argentina",
  "Formación en cuidado del paciente oncológico",
  "Coaching en alimentación basada en plantas, Instituto Universitario Vive Sano",
] as const;

export const ENFOQUE = [
  "Aprenderás a escuchar y a conectar con tu cuerpo.",
  "Trabajaremos en identificar tus señales de hambre, tipos de hambre y señales de saciedad.",
  "Regularemos tu microbiota intestinal, ya que es nuestro segundo cerebro y regula toda nuestra parte intestinal, emocional, metabólica y hormonal.",
  "Miraremos la nutrición mediante un enfoque integral y funcional, donde analizaremos muchos factores diferentes a solo lo que comes.",
  "Revisaremos tus exámenes de laboratorio, para cerciorarnos de que no tengas alteraciones o deficiencias. De no tenerlos, yo te los envío según tu caso.",
  "Te enviaré un plan nutricional enfocado en tus necesidades, sin restricciones y sin eliminar grupos de alimentos.",
  "Evaluaremos porciones y cantidades de forma continua y personalizada.",
  "Realizaremos una suplementación adecuada después de evaluar y profundizar en tu caso.",
  "Haremos controles continuos con el fin de que estemos logrando los objetivos.",
] as const;
