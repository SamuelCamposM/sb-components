import "./mylabel.css";
export interface MyLabelProps {
  /**
   * El mensaje que se mostrara en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Define si todas las letras son mayusculas
   */
  allCaps: boolean;
  /**
   * Define el color de la etiqueta
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = true,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
       {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
