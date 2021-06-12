const Minute = 60000;
const Hour = 3600000;
const Day = 86400000;
const Year = 31556952000;

export function getTimeSinceNow(lastPerformed: any): string {
    if (!isNaN(lastPerformed)) {
      let timeDiff = Date.now() - lastPerformed;
      if (timeDiff <= Minute) {
        return "Just now";
      } else if (timeDiff < Hour) {
        return Math.floor(timeDiff / Minute).toString() + " minutes ago";
      } else if (timeDiff < Day) {
        return Math.floor(timeDiff / Hour).toString() + " hours ago";
      } else if (timeDiff < Year) {
        return Math.floor(timeDiff / Day).toString() + " days ago";
      } else {
        return "Over a year ago";
      }
    }
    return "Never";
}