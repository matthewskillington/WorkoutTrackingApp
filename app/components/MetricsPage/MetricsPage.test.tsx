import React from 'react';
import 'react-native';
import MetricsPage from './MetricsPage';
import { render } from '@testing-library/react-native';


const mockNavigation = jest.fn();

const mockGetExercises = jest.fn();
jest.mock('../../localStorage/localStorage', () => ({
    GetExercises: () => mockGetExercises()
}));

const MockCustomHeader = jest.fn().mockImplementation(() => <></>);
jest.mock('../CustomHeader/CustomHeader', () => ({
    __esModule: true,
    default: (props: any) => <MockCustomHeader {...props}/>,
}));

describe('MetricsPage', () => {

    it('should render page', () => {
        render(<MetricsPage navigation={mockNavigation}/>);
    });
})