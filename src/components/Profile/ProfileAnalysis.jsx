import { Product } from "../Product/Product";

export function ProfileAnalysis() {
  const analysisData = localStorage.getItem("analysis");
  const analysis = analysisData ? JSON.parse(analysisData) : null;
  return (
    <div className="profile-analysis-result-info secondary">
      {analysis && (
        <>
          <h4>Last analysis: {getAnalysisDate(analysis)}</h4>
          <br />
          <h4>Total Info</h4>
          <br />
          <h5>Redness</h5>
          <p>{analysis.data.redness}</p>
          <br />
          <h5>Acne</h5>
          <p>{analysis.data.acne}</p>
          <br />
          <h5>Pigmentation</h5>
          <p>{analysis.data.pigmentation}</p>
          <br />
          <br />
          <br />
          <br />
          <h5 className="products-list-title">Related products</h5>
          <ul className="profile-products-list">
            { analysis.products.map(p => <Product { ...p } />) }
          </ul>
        </>
      )}
      {!analysis && <h4>No analysis was performed.</h4>}
    </div>
  );
}

function getAnalysisDate(analysis) {
  const date = new Date(Date.parse(analysis.date));
  console.log(date);
  return date.toLocaleDateString('ru-RU');
}
