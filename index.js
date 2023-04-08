function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue-42);
  }

  function distanceFromHqInFeet(someValue) {
   return 264 * distanceFromHqInBlocks(someValue);
  }

  function distanceTravelledInFeet(start, destination) {
    return 264*Math.abs(start-destination);
  }

  function calculatesFarePrice(start, destination) {
    let feet = 264*Math.abs(start-destination)
    switch (true) {
        case (feet<=400):
            return 0;
            break;
        case (feet>400 && feet<2000):
            return (feet-400)*.02;
            break;
        case (feet>=2000 && feet<2500):
            return 25;
            break;
        default:
            return 'cannot travel that far';
    }
  }