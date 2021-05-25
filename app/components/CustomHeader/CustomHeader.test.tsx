import { render } from "@testing-library/react-native";
import React from "react";
import CustomHeader from "./CustomHeader";

describe('CustomHeader', () => {

    it('should render component', () => {
        render(<CustomHeader
            navigation={{}}/>)
    })
});