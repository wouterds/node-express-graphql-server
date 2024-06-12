import data from './data/es.json';

export class EmployeeSchedulingRepository {
  public static getAll() {
    return data;
  }
}
