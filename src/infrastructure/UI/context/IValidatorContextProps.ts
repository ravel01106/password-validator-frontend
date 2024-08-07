import { Dispatch, SetStateAction } from "react";
import { IValidator } from "../domain/IValidator";

export interface IValidatorContextProps {
  validator:IValidator,
  setValidator: Dispatch<SetStateAction<IValidator>>
}