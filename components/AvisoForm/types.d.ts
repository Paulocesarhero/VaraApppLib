export interface AvisoFormProps {
    onSubmitData: (data: AvisoValues) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export interface AvisoValues {
    FacilAcceso: boolean;
    Acantilado: boolean;
    Sustrato: string;
    LugarDondeSeVio: number;
    FechaAvistamiento: string;
    Especie?:string;
    Observaciones: string;
    Condicion: string;
    Cantidad: number;
    Pais: string;
    Estado: string;
    Ciudad: string;
    Localidad: string;
    InformacionAdicional: string;
    Latitud: number;
    Longitud: number;
}
