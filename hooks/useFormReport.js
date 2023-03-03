import { useContext } from "react";
import { FormReportContext } from "../context/useFormReport";

export function useFormReport() {
    const data = useContext(FormReportContext)

    return data
}