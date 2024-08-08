import { Dispatch, SetStateAction } from "react";
import { Validator } from "../../../domain/entities/Validator";

export interface IValidatorContextProps {
  validator:Validator,
  setValidator: Dispatch<SetStateAction<Validator>>
}