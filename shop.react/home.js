import react from 'react';
import itemccard from   "./itemcard";

 const home = () =>
    {
        console.warn(data,productdata)
    
    return (
        <>
        <h1 classname="text-center mt-3">all items</h1>
        <section classname= "py-4 container">
            <div classname="row justify-content-center">
                {data.productdatamap((item, index) => {
                    return(
                        <itemcard img=""  title={item.title} desc = {item.desc} price={item.price} key={index} />

                    )
                }
                )}
            
            </div>
        </section>
        
        
        </>
        

    ); 
}
export default app;