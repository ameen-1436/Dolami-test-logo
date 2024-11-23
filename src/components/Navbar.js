import { useState,useEffect } from 'react';
import RangeSlider from './Slider';
import './navbar.css'

export default function Navbar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [images, setImages] = useState([]);

  const platforms = [
    'VRChat (Quest)',
    'VRChat (PCVR)',
    'Spatial',
    'ChilloutVR',
    'Resonite',
    'Neos VR',
    'Cluster',
    'Virtual Cast',
    'Others'
  ];

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = {};
      platforms.forEach(element => {
        imageUrls[element] = `/filterImages/${element}.jpg`;
      })
      setImages(imageUrls);
    };

    fetchImages();
  }, []);



  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleApply = () => {
    console.log('Price Range:', priceRange);
    console.log('Selected Platforms:', selectedPlatforms);
  };

  const handleClearAll = () => {
    setPriceRange([0, 1000]);
    setSelectedPlatforms([]);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={"container"}>
      <header className={"header"}>
        <input type="text" placeholder="Keyword Search" />
        <select>
          <option value="all">Category All</option>
        </select>
        <button>🔍</button>
        <button onClick={togglePopup}>🛠 Filter</button>
        <button>🧍</button>
        <button>🛒</button>
      </header>
      {isPopupOpen && (
        <div className={`${"filterPopup"} ${"active"}`}>
          <h2>Filters</h2>
          <RangeSlider /    >
          <div className={"platforms"}>
            <h3>Platforms</h3>
            {platforms.map((platform) => (
                
              <button
                key={platform}
                className={selectedPlatforms.includes(platform) ? "selected" : ''}
                onClick={() => handlePlatformToggle(platform)}
              >
                {(platform !== "others" || platforms !== "Cluster") && <img src={images.platform} />}
                {platform}
              </button>
            ))}
          </div>
          <div className={"actions"}>
            <button onClick={handleClearAll}>Clear all</button>
            <button onClick={handleApply}>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
}
