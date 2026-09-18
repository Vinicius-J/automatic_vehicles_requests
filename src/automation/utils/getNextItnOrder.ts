export function getNextItnOrder(sarams: string[]) {
  let _arrOrders = [...sarams];
  return function () {
    if (!_arrOrders.length) _arrOrders = [...sarams];
    const nextOrder = _arrOrders.shift();
    if (typeof nextOrder === "string") return nextOrder;
    return;
  };
}
