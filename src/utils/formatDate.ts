export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  const formattedDate = `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;

  return formattedDate;
};
