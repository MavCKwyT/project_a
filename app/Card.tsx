"use client";

import { FC } from "react";

interface CardProps {
  ticket: {
    // Цена в рублях
    price: number;
    // Код авиакомпании (iata)
    carrier: string;
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
      {
        // Код города (iata)
        origin: string;
        // Код города (iata)
        destination: string;
        // Дата и время вылета туда
        date: string;
        // Массив кодов (iata) городов с пересадкамиg
        stops: string[];
        // Общее время перелёта в минутах
        duration: number;
      },
      {
        // Код города (iata)
        origin: string;
        // Код города (iata)
        destination: string;
        // Дата и время вылета обратно
        date: string;
        // Массив кодов (iata) городов с пересадками
        stops: string[];
        // Общее время перелёта в минутах
        duration: number;
      },
    ];
  };
}

export const Card: FC<CardProps> = ({ ticket }) => {
  const { price, segments } = ticket;

  const formatTime = (durationInMin: number) => {
    const hours = Math.floor(durationInMin / 60);
    const minutes = durationInMin % 60;

    return `${hours}ч ${minutes}м`;
  };

  const formatDepartureReturnTime = (date: string) => {
    const DateTimeDepartureThere = new Date(date);

    const hours = DateTimeDepartureThere.getHours().toString().padStart(2, "0");
    const minutes = DateTimeDepartureThere.getMinutes()
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const departureTime = formatDepartureReturnTime(segments[0].date);
  const returnTime = formatDepartureReturnTime(segments[1].date);

  const flightTimeThere = formatTime(segments[0].duration);
  const flightTimeBack = formatTime(segments[1].duration);

  const stopsThere = segments[0].stops.map((city) => city).join(" ");
  const stopsBack = segments[1].stops.map((city) => city).join(" ");

  return (
    <div className="bg-[#FFFFFF] max-w-xl max-h-max p-5">
      <div className="flex justify-between pb-5">
        <div>{price}</div>
        <div>ИКОНКА АВИАЛИНИИ</div>
      </div>
      <div className="flex justify-between pb-2.5">
        <div>
          <div>{`${segments[0].origin} - ${segments[0].destination}`}</div>
          <div>{departureTime} - 08:00</div>
        </div>
        <div>
          <div>В пути</div>
          <div>{flightTimeThere}</div>
        </div>
        <div>
          <div>{segments[0].stops.length} Пересадки</div>
          <div>{stopsThere}</div>
        </div>
      </div>

      <div className="flex justify-between pb-2.5">
        <div>
          <div>{`${segments[1].origin} - ${segments[1].destination}`}</div>
          <div>{returnTime} - 00:50</div>
        </div>
        <div>
          <div>В пути</div>
          <div>{flightTimeBack}</div>
        </div>
        <div>
          <div>{segments[1].stops.length} Пересадки</div>
          <div>{stopsBack}</div>
        </div>
      </div>
    </div>
  );
};
