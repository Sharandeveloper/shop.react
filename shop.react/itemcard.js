import react from 'react';
const itemcard = () => {
    return (
        <div>
            <div classname="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div class= "card p-0 overflow-hi h-100 shadpw"></div>
                <img src= {props.img} class= "card-img-top img-fluid" />
                <div class= "card-body text-center">
                    <h5 class="card-title"> {props.title}</h5>
                    <h5 class="card-title">{props.price}</h5>
                    <p class="card-text">{props.desc</p>
                    <p class="card-text">some quick example text to build  the card title and make them happy</p>
                    <button class="btn btn-success"
                    onClick={() => additem(props.item)}>add to cart</button>
                </div>

            </div>
        </div>
    );
};

export default itemcard;