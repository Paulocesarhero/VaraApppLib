import InformacionPersonalForm from "./InformacionPersonalForm";

export default {
    title: 'components/InformacionPersonalForm',
    component: InformacionPersonalForm,
    parameters: {
        docs: {
            description: {
                component: "Este componente se encarga de validar los datos del usuario antes de hacer la peticion en ca" +
                    "da cliente"
            }
        }
    }
}

export const Basic = () => {
    return <InformacionPersonalForm/>;
}