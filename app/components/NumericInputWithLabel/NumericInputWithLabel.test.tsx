import { render } from "@testing-library/react-native";
import React from "react";
import NumericInputWithLabel from "./NumericInputWithLabel";

describe('NumbericInputWithLabel', () => {

    it('should render component', () => {
        render(<NumericInputWithLabel
            label="test"
            value="test"
            onChangeHandler={(text: string) => {return {}}}/>)
    })
});