import data from './data/employee-schedules.json';

export class EmployeeSchedulingRepository {
  public static getAll() {
    return data.map((item) => ({
      __typename: 'EmployeeSchedulingRun',
      id: item.scheduleId,
      ...item,
    }));
  }
}
