const checkCharacter = (
  character,
  left,
  right,
  top,
  bottom,
  clickX,
  clickY
) => {
  if (clickX >= left && clickX <= right && clickY >= top && clickY <= bottom) {
    return true;
  } else {
   return false;
  }
};

export default checkCharacter;
