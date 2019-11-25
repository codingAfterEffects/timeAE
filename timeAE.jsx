(() => {
  return {
    framework: (t, func) => {
      const time = t + thisComp.displayStartTime;
      const frameRate = 1 / thisComp.frameDuration;
      const framesCount = func(time, frameRate);
      const seconds = Math.floor(time);
      const secondsReset = seconds % 60;
      const doubleDigit = 10;
      const frameReset = framesCount % frameRate;
      const frames = framesCount % frameRate;
      const minutes = Math.floor(time / 60);
      const minutesReset = minutes % 60;
      const isDouble = digit => digit < doubleDigit ? `0${digit}` : digit;
      return {
        frames: frames,
        framesDouble: isDouble(frameReset),
        frameRate: frameRate,
        seconds: seconds,
        secondsDouble: isDouble(secondsReset),
        minutes: minutes,
        minutesDouble: isDouble(minutesReset),
      }
    }
  }
})()
