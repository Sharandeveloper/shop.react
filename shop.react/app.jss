import react from 'react;
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import home from "./home";
import { } from "react-use-cart";
function app() {
    return (
        <>
        <cartprovider>
        <home />
        <cart />
        </cartprovider>
        </>
        

    ); 
}
export default app;