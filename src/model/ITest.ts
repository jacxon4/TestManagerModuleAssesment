import {IOperation} from "../operations/IOperation";
import {TestType} from "./TestType";
export interface ITest {
    testType: TestType;
    name: string;
    accept(operation: IOperation):string;
}

