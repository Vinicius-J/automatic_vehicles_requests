import { SaramsNotFound } from "../../core/errors/repositoryErrors/SaramsNotFound";

export function getNextItnOrder(sarams: string[]) {
  let _arrOrders = [...sarams];
  return function (): string {
    if (!_arrOrders.length) _arrOrders = [...sarams];
    const nextOrder = _arrOrders.shift();
    if (!nextOrder) throw new SaramsNotFound();
    return nextOrder;
  };
}
