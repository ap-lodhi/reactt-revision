const Attribute =()=>{
    const lecture ="Lecture";
    const image1 ='https://picsum.photos/200/300';
    const image2 ='https://picsum.photos/250/300';
    const image3 ='https://picsum.photos/300/300';
    return(

        <>
  <br/>
  <hr/>
      <div className="App">

        <h1  contentEditable="true">Attribute  {lecture}</h1>
        <img src={image1} alt="loading" />
        <img src={image2} alt="loading" />
        <img src={image3} alt="loading" />
      </div>
        </>
    )
}

export default Attribute;
