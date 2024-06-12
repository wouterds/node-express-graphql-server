import data from './data/route-plans.json';

export class RoutePlanningRepository {
  public static getAll() {
    return data.map((item) => ({
      __typename: 'RoutePlanRun',
      id: item.routePlanId,
      ...item,
    }));
  }
}
