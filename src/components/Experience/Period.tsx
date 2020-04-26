import React from 'react';
import { format, isToday } from "date-fns";
import { fr } from "date-fns/locale";

interface IProps {
  from: Date;
  to: Date;
}

const formatDate = (date: Date) => {
  if (isToday(date)) return 'aujourd\'hui';
  return format(date, "MMM yyyy", { locale: fr })
}

const Period = ({ from, to }: IProps) => (
  <span>
    {formatDate(from)} - {formatDate(to)}
  </span>
);

export default Period;
