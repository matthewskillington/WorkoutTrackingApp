import React from 'react';
import 'react-native';
import MetricsPage from './MetricsPage';
import { render, waitFor } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';


const mockNavigation = jest.fn();

const mockGetExercises = jest.fn();
jest.mock('../../localStorage/localStorage', () => ({
    GetExercises: () => mockGetExercises()
}));

jest.mock("../CustomHeader/CustomHeader", () => {
    return {
      __esModule: true,
      default: () => <></>,
    };
  });
describe('MetricsPage', () => {

    it('should render page', () => {
        render(<MetricsPage navigation={mockNavigation}/>);
    });

    it('should GetExercises from localStorage', async () => {
        mockGetExercises.mockReturnValue([
          {
            id: 1,
            name: 'Dumbbell Curl',
            lastPerformed: '',
            reps: 0,
          },
          {
            id: 2,
            name: 'Dumbbell Row',
            lastPerformed: '',
            reps: 0,
          }])
        const { getByTestId } = render(<MetricsPage navigation={mockNavigation}/>);

        await waitFor(() => {
            expect(mockGetExercises).toHaveBeenCalled();
            const children = getByTestId('scrollview-wrapper').children[0] as ReactTestInstance;
            expect(children.instance.props.children.length).toEqual(2);
        })
        
    })
})