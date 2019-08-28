
export function shadow(offsetX = 0, offsetY = 15, blurRadius = 20, color = 'rgba(70,70,130, 0.2)') {
  if (offsetX && typeof offsetX === 'object') {
    return shadow(offsetX.offsetX, offsetX.offsetY, offsetX.blurRadius, offsetX.color);
  }
  return `
    box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${color};
  `;
}

export function radius(value = 20) {
  return `
    border-radius: ${value}px;
    border-top-right-radius: ${value}px;
    border-top-left-radius: ${value}px;
    border-bottom-right-radius: ${value}px;
    border-bottom-left-radius: ${value}px;
  `;
}

export default {
  shadow,
  radius,
};
