import { Json } from "../types";

/** Abstract class that all models must extend */
export default abstract class Model {
  toJson?(): Json;
  abstract toString(): String;
}