import React from "react";

export function AnalysisInput(props) {
  const fileInput = React.useRef(null);
  const [image, setImage] = React.useState(null);
  const [imageName, setImageName] = React.useState(null); 
  const [error, setError] = React.useState(props.error);

  const handleSubmit = (event) => {
    console.log(imageName);
    event.preventDefault();
    props.makeAnalysis(imageName);
  };

  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0].name);
      setError(null);
    }
  };

  return (
    <div className="container">
      <div className="analysis">
        <div className="analysis-screen" id="analysis-input">
          <div className="upload-image-box">
            {!image && (
              <label htmlFor="fileInput">
                Select Image
                <input
                  id="fileInput"
                  type="file"
                  ref={fileInput}
                  onChange={onImageChange}
                />
              </label>
            )}
            {image && (
              <div className="upload-image-box-image">
                <img src={image} alt="preview image" />
              </div>
            )}
          </div>
          <div className="button-bar">
            <button className="btn" onClick={handleSubmit} disabled={!image}>
              Make analysis
            </button>
            {error && <div className="error-text">Error: {error}</div> }
          </div>
        </div>
      </div>
    </div>
  );
}
