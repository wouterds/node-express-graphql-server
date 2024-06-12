import data from './data/route-plans.json';

export class RoutePlanningRepository {
  public static getAll() {
    return data.map((item) => ({
      __typename: 'RoutePlanRun',
      id: item.routePlanId,
      ...item,
    }));
  }

  public static getById(id: string) {
    const items = RoutePlanningRepository.getAll();

    return items.find((item) => item.routePlanId === id);
  }
}
