import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addproduct } from '../reducers/productslice';
import { useNavigate} from 'react-router-dom';

function Addproduct(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [image, setImage] = useState({});
    const getImgURl = (e) => {
        
        const formdata = new FormData();
        formdata.append('file', image);
        formdata.append('upload_preset', 'docs_upload_example_us_preset');
        fetch('https://api.cloudinary.com/v1_1/demo/image/upload', {
            method: 'POST',
            body: formdata,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data, 'data');
                let newproduct={
                    name:e.target.name.value,
                    price:e.target.price.value,
                    seller:e.target.seller.value,
                    Description:e.target.Description.value,
                    src:data.url,
                }
                dispatch(addproduct(newproduct))
                navigate('/');

            });
    };
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        getImgURl(e);   
       
    }
    
    return(
        <div style={{backgroundImage:"url('https://www.ivins.com/wp-content/uploads/2017/02/website-design-background.png')"}} className='register'>
            <form onSubmit={handleOnSubmit} >
                <div className='addform'>
                <h1 className='head'>Add Product Form</h1>
                <input type="text" name='name' placeholder='Enter the Product name' className="Linpt"/><br />
                <input type="text" name='price' placeholder='Enter the product price' className='Linpt'/><br />
                <input type="text" name='seller' placeholder='Enter the product seller' className='Linpt'/><br />
                <input type="textarea" name='Description' placeholder='Enter the Description' className='Linpt'/><br />
                <input type="file" onChange={(e)=> setImage(e.target.files[0])} className='file'/><br/>
                <button type='submit' class="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Addproduct