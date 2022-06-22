import React from "react";
import { AnalysisInput } from "./AnalysisInput";
import { AnalysisOutput } from "./AnalysisOutput";
import { statuses } from "../../common/constants";
import { performAnalysis } from "../../core/analysis";

export function Analysis() {
  const [stage, setStage] = React.useState("input");
  const [result, setResult] = React.useState(null);

  const makeAnalysis = (file) => {
    setStage(statuses.analysis);

    const res = performAnalysis(file);

    setTimeout(() => {
      setResult(res);
      console.log(res);
      if (res.data) {
        setStage(statuses.output);
      } else {
        setStage(statuses.input);
      }
    }, 2000);
  };

  switch (stage) {
    case statuses.analysis:
      return <AnalysisLoading />;
    case statuses.output:
      return <AnalysisOutput result={result.data} image={result.image} />;
    case statuses.input:
    default:
      return <AnalysisInput makeAnalysis={makeAnalysis} error={result?.error} />;
  }
}

export function AnalysisLoading() {
  return <div>Loading</div>;
}
