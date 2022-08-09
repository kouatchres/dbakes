interface startEndTime {
  startTime: Date;
  endTime: Date;
}

const validateTimeSlot = (
  existingTimeslots: startEndTime[],
  newSlot: startEndTime
): boolean => {
  let isValid = true;

  for (let i = 0; i < existingTimeslots.length; i++) {
    if (
      existingTimeslots[i].endTime > newSlot.startTime &&
      existingTimeslots[i].startTime <= newSlot.endTime
    ) {
      isValid = false;
    }
  }

  return isValid;
};

export default validateTimeSlot;
