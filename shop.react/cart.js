import react from 'react';
import { } from "react-use-cart";

 const cart = ()  => {
    const {
        isempty, 
        totaluniqueitems,
        totalitems,
        item,
        carttotals,

    } = usecart();
    if (isempty) return <h1 class name="text-center">
        your cart is empty

    </h1>
    return (
        <section classname="py-4 container">
            <div classname="row justify-content-center">
                <div classname="col-12">
                    <h5>
                        cart ({totaluniqueitems})total item: ({total item})
                    </h5>
                    <table className="table table-light table-hover m-0">
                        <body>
                        {item.map((item,item)
                        <tr key= {index}>
                            <td>
                                <img src={item.img} style={{height: '6rem'}} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td> quanity ({item.quanity})</td>
                            <td>
                                <button classnAME="btn btn-info ms-2" onClick={(item.id, item.quanity -1)}></button>
                                <button classnAME="btn btn-danger ms-2">remove items</button>
                                <button classnAME="btn btn-info ms-2" onClick={()=> updateitemquanity(item.id, item.quanity +1)}>+</button>

                            </td>
                        </tr>
                        )}
                        </body>
                    </table>
                </div>
            </div>
        </section>
        <div>
            
    );

 };