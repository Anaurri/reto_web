import { Fragment } from "react";

// function PhoneItem({ phone: { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } }) {

function PhoneItem({phone}) {


    return (
        <Fragment>
            {phone && (
                <div>
                    <h1>{phone.name}</h1>
                    <div className="card">
                        <img src={phone.imageFileName} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{phone.name}</h5>
                            <p className="card-text">{phone.description}</p>
                            <p className="card-text">Manufacturer: <small className="text-muted">{phone.manufacturer}</small></p>
                            <p className="card-text">Processor: <small className="text-muted">{phone.processor}</small></p>

                        </div>
                    </div>
                </div>

            )}

        </Fragment>
    );
}

export default PhoneItem;

