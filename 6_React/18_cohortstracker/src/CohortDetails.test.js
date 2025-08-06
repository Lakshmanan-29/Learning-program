// CohortDetails.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortsData } from './Cohort';

describe('CohortDetails Component Tests', () => {
  const testCohort = CohortsData[0];

  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should initialize props correctly', () => {
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    expect(wrapper.instance()).toBe(null); // Functional component
    expect(wrapper.find('h3').text()).toContain(testCohort.cohortCode);
    expect(wrapper.find('span').text()).toBe(testCohort.technology);
  });

  test('should contain h3 element with correct text', () => {
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    const h3Text = wrapper.find('h3').text();
    expect(h3Text).toBe(`${testCohort.cohortCode} -${testCohort.technology}`);
  });

  test('should match snapshot', () => {
    const wrapper = shallow(<CohortDetails cohort={testCohort} />);
    expect(wrapper).toMatchSnapshot();
  });
});
