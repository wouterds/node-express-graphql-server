import {
  EmployeeSchedulingRepository,
  FieldServiceRoutingRepository,
} from '../../../../repositories';

export const runs = async () => {
  const runs = [
    ...EmployeeSchedulingRepository.getAll(),
    ...FieldServiceRoutingRepository.getAll(),
  ];

  return runs;
};
