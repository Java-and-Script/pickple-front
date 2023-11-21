export const getTimeStamp = (timeStamp: string) => {
  const currentDate = new Date();
  const messageDate = new Date(timeStamp);

  const timeDifference = currentDate.getTime() - messageDate.getTime();

  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const year = messageDate.getFullYear();
  const month = messageDate.getMonth() + 1;
  const day = messageDate.getDate();

  if (minutesDifference < 60) {
    return `${minutesDifference}분 전`;
  }

  if (hoursDifference < 24) {
    return `${hoursDifference}시간 전`;
  }

  if (daysDifference < 30) {
    return `${daysDifference}일 전`;
  }

  return `${year}년 ${month}월 ${day}일`;
};
