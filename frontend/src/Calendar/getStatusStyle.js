/* eslint max-params: 0 */
import moment from 'moment';

function getStatusStyle(episodeNumber, downloading, startTime, isMonitored) {
  const currentTime = moment();

  // if (hasFile) {
  //   return 'downloaded';
  // }

  if (downloading) {
    return 'downloading';
  }

  if (!isMonitored) {
    return 'unmonitored';
  }

  if (currentTime.isAfter(startTime)) {
    return 'missing';
  }

  return 'unreleased';
}

export default getStatusStyle;
