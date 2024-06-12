import {
  EmployeeSchedulingRepository,
  RoutePlanningRepository,
} from '../../../../repositories';

export const run = async (
  _parent: unknown,
  { id, type }: { id: string; type: string },
) => {
  switch (type) {
    case 'EmployeeScheduling':
      return EmployeeSchedulingRepository.getById(id);
    case 'FieldServiceRouting':
      return RoutePlanningRepository.getById(id);
  }

  return null;
};
