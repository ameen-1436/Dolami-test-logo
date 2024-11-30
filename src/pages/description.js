import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "./../app/description.css";

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const [selectdImage, setSelectedImage] = useState("Image1")
  const router = useRouter();
const handleImageClick = (image) => {
  setSelectedImage(image)
}
  useEffect(() => {
    if (router.query.id) {
      const { id, name } = router.query;
      setProduct({ id, name });
    }
  }, [router.query]);

  const goBack = () => {
    router.push("/")
  }

  if (!product) return <p>Loading...</p>;
  const detailImages = ["Image1", "Image2", "Image3", "Image4"];
  return (
    <>
    <div onClick={goBack}>Goback</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="descCard">
          <div className="descImagePlaceholder">{selectdImage}</div>
        </div>
        <div className="varitiesHolder" >
          {detailImages.map((image) => (
            <div key={image} className="varitiesCards" style={{color:"white"}} onClick={() => handleImageClick(image)}> {image}</div>
          ))}
        </div>
        <div style={{color:"white"}}>Produt Name<div  style={{color:"white"}}>Brief description of product, a one liner.</div></div>
        <div style={{color:"white"}} >ratings</div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default ProductDescription;
