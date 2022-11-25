
import React, {
    useState
} from 'react';
import Card from "./Card";
import './image.css';

const Image1 = () => {
    const [images, setImages] = useState([{
        url: 'https://source.unsplash.com/random/1'
    },
    {
        url: 'https://source.unsplash.com/random/2'
    },
    {
        url: 'https://source.unsplash.com/random/3'
    },
   

    ])
    console.log(images);
    const addImage = () => {
        setImages([...images, {
            url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`
        }])

    }

    const removeImage = () => {
        setImages(images.slice(0, -1))
    }
    return (
        <section className="hero" >
            <div className="cardContainer" >
                <Card images={images} />
            </div>
            <div className="buttonContainer" >
                <button onClick={
                    removeImage
                }> Remove </button> 
                <button onClick={
                        addImage
                    } > Add </button> 
        </div> 
        </section>
                        );
}

 export default Image1;