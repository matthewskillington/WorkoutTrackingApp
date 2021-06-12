import 'react-native';
import { getTimeSinceNow } from './timeSinceNowHelper';

it('should return `Never` if called with not a number', () => {
    //Arrange:
    const testArgument = "test";
    const testArgument2 = {};
    
    //Act:
    const result = getTimeSinceNow(testArgument)
    const result2 = getTimeSinceNow(testArgument2);

    //Assert:
    expect(result).toEqual("Never");
    expect(result2).toEqual("Never");
});

it('should return `Just now` if called with a date less than a minute ago', () => {
    //Arrange:
    const testArgument = Date.now() - 30000;
    
    //Act:
    const result = getTimeSinceNow(testArgument)

    //Assert:
    expect(result).toEqual("Just now");
});

it('should return `24 minutes ago` when called with a date 24 minutes ago', () => {
    //Arrange:
    const testArgument = Date.now() - 1440000;
    
    //Act:
    const result = getTimeSinceNow(testArgument)

    //Assert:
    expect(result).toEqual("24 minutes ago");
});

it('should return `7 hours ago` when called with a date 7 hours ago', () => {
    //Arrange:
    const testArgument = Date.now() - 25200000;
    
    //Act:
    const result = getTimeSinceNow(testArgument)

    //Assert:
    expect(result).toEqual("7 hours ago");
});

it('should return `66 days ago` when called with a date 66 days ago', () => {
    //Arrange:
    const testArgument = Date.now() - 5702400000;
    
    //Act:
    const result = getTimeSinceNow(testArgument)

    //Assert:
    expect(result).toEqual("66 days ago");
});

it('should return `over a year ago` when called with a date 367 days ago', () => {
    //Arrange:
    const testArgument = Date.now() - 31708800000;
    
    //Act:
    const result = getTimeSinceNow(testArgument)

    //Assert:
    expect(result).toEqual("Over a year ago");
});


