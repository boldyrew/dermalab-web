import { files, photoErrors } from "../common/constants";

import acne_result from '../assets/img/results/acne_result.jpg';
import normal_result from '../assets/img/results/normal_result.jpg';
import pigmetation_result from '../assets/img/results/pigmentation_result.jpg';
import redness_result from '../assets/img/results/redness_result.jpg';

const initialResult = {
  normal: "",
  acne: files.acne.nullValue,
  redness: files.redness.nullValue,
  pigmentation: files.pigmentation.nullValue,
};

function getResult(res) {
  const data = { ...initialResult };
  if (res != "normal") {
    data[res] = files[res].value;
  }  
  let image = "";
  switch (res) {
    case "normal":
      image = normal_result;
      break;
    case "acne":
      image = acne_result;
      break;
    case "redness":
      image = redness_result;
      break;
    case "pigmentation":
      image = pigmetation_result;
      break;
  }
  return { data, image };
}

function getError(res) {
  return { error: photoErrors[res] };
}

export function performAnalysis(file) {
  console.log("file", file)
  const name = file.split(".")[0];

  switch (name) {
    case "normal":
      return getResult("normal");
    case "acne":
      return getResult("acne");
    case "redness":
      return getResult("redness");
    case "pigmentation":
      return getResult("pigmentation");
    case "many_faces":
      return getError("many_faces");
    case "no_color":
      return getError("no_color");
      case "not_full_face":
      return getError("not_full_face");
    case "no_faces":
      return getError("no_faces");
  }
}
