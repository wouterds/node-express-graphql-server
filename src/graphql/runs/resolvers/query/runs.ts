import {
  EmployeeSchedulingRepository,
  RoutePlanningRepository,
} from '../../../../repositories';

type Options = {
  filter?: {
    type?: string;
  };
};

export const runs = async (_parent: unknown, options?: Options) => {
  switch (options?.filter?.type) {
    case 'EmployeeScheduling':
      return EmployeeSchedulingRepository.getAll();
    case 'FieldServiceRouting':
      return RoutePlanningRepository.getAll();
  }

  const runs = [
    ...EmployeeSchedulingRepository.getAll(),
    ...RoutePlanningRepository.getAll(),
  ].sort((a, b) => {
    if (new Date(a.submitTime) > new Date(b.submitTime)) {
      return -1;
    }

    if (new Date(a.submitTime) < new Date(b.submitTime)) {
      return 1;
    }

    return 0;
  });

  return runs;
};
