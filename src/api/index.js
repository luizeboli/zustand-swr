import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://app.qa.hiplatform.com/agent/ticket/1.0",
  headers: {
    Authorization:
      "DT-Fenix-Token TDT07_qd24LRhuLEKTqcUFEmBHbh6vZVrnD8wk_30613_327",
  },
});
