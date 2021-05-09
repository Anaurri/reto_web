import { Fragment, useContext } from "react";
import { AuthContext } from '../../contexts/AuthStore';


// function PhoneItem({ phone: { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } }) {

function PhoneItem({ phone }) {

    const { onCartChange } = useContext(AuthContext);
    // /*Inicio Crear Reserva*/
    // const [state, setState] = useState({
    //     cart: id,
    //     errors: {},
    //     message: ''

    // })
    const handleSubmit = (id) => {
        const cart = id;
        onCartChange(cart)
    }

    return (
        <Fragment>
            {phone && (
                <div>
                    <div className="card">
                        <img src={phone.imageFileName} className="card-img-top" style={{ height: "20rem", width: "100%" }} alt={phone.name} />
                        <h1>{phone.name}</h1>
                        <div className="card-body">
                            <h5 className="card-title">{phone.name}</h5>
                            <p className="card-text">{phone.description}</p>
                            <p className="card-text">Manufacturer: <small className="text-muted">{phone.manufacturer}</small></p>
                            <p className="card-text">Processor: <small className="text-muted">{phone.processor}</small></p>

                            <div className="d-grid">
                                <form onSubmit={handleSubmit}>
                                    <button className="input-group-text  bg-black" type="submit"> <i className="fa fa-shopping-cart"></i></button>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

            )}

        </Fragment>
    );
}

export default PhoneItem;

