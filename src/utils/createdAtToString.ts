export const createdAtToString = (createdAt: Date) => {
  const now = new Date();

  const periodSec = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000 / 60
  );
  const periodHour = Math.floor(periodSec / 60);
  const periodDay = Math.floor(periodSec / 60 / 24);

  if (periodSec < 1) {
    return '방금 전';
  }

  if (periodSec < 60) {
    return `${periodSec}분 전`;
  }

  if (periodHour < 24) {
    return `${periodHour}시간 전`;
  }

  if (periodDay < 8) {
    return `${periodDay}일 전`;
  }

  return `${createdAt.getFullYear()}년 ${
    createdAt.getMonth() + 1
  }월 ${createdAt.getDate()}일`;
};
