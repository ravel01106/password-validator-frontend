import { Dispatch, SetStateAction } from "react";
import { IValidator } from "./IValidator";

export interface IValidatorContextProps {
  validator:IValidator,
  setValidator: Dispatch<SetStateAction<IValidator>>
}