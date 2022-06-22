import { files, photoErrors } from "../common/constants";

import acne_result from "../assets/img/results/acne_result.jpg";
import normal_result from "../assets/img/results/normal_result.jpg";
import pigmetation_result from "../assets/img/results/pigmentation_result.jpg";
import redness_result from "../assets/img/results/redness_result.jpg";
import { products } from "../common/products";

const initialResult = {
  normal: "",
  acne: files.acne.nullValue,
  redness: files.redness.nullValue,
  pigmentation: files.pigmentation.nullValue,
};

function getResult(res) {
  const data = { ...initialResult };
  const products = getProducts(res);
  const image = getImage(res);
  if (res != "normal") {
    data[res] = files[res].value;
  }
  return { data, image, products };
}

function getProducts(res) {
  return products.filter((p) => p.category === res);
}

function getImage(res) {
  switch (res) {
    case "normal":
      return normal_result;
    case "acne":
      return acne_result;
    case "redness":
      return redness_result;
    case "pigmentation":
      return pigmetation_result;
    default:
      return "";
  }
}

function getError(res) {
  return { error: photoErrors[res] };
}

export function performAnalysis(file) {
  console.log("file", file);
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
