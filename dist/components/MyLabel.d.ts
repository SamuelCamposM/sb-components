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
    /**
     * Color personalizado de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
