
import {useLoaderData} from "react-router-dom";

const Phone = () => {

    const phone = useLoaderData();
    console.log(phone)

    return (
        <div>
            <h2>Phone Id: {phone.id}</h2>
            <p>Name: {phone.name}</p>
            <p>Price: {phone.price}</p>
        </div>
    );
};

export default Phone;