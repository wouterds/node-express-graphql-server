import {
  EmployeeSchedulingRepository,
  RoutePlanningRepository,
} from '../../../../repositories';

export const runs = async () => {
  const runs = [
    ...EmployeeSchedulingRepository.getAll(),
    ...RoutePlanningRepository.getAll(),
  ];

  return runs;
};
