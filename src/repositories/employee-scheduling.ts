import data from './data/employee-schedules.json';

export class EmployeeSchedulingRepository {
  public static getAll() {
    return data.map((item) => ({
      __typename: 'EmployeeSchedulingRun',
      id: item.scheduleId,
      ...item,
    }));
  }

  public static getById(id: string) {
    const items = EmployeeSchedulingRepository.getAll();

    return items.find((item) => item.scheduleId === id);
  }
}
