enum DirectionEnum { horizontal, vertical }

namespace DirectionEnum {
  export function isHorizontal(direction: DirectionEnum): boolean {
    return direction === DirectionEnum.horizontal;
  }

  export function isVertical(direction: DirectionEnum): boolean {
    return direction === DirectionEnum.vertical;
  }
}

export default DirectionEnum;