import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

test("create an appointment", () => {
  const startsAt = getFutureDate('2023-08-10')
  const endsAt = getFutureDate('2023-08-11')

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot created an appoitment with end date before start date", () => {
  const startsAt = getFutureDate('2023-08-10')
  const endsAt = getFutureDate('2023-08-09')

  expect(() => {
    const appointment = new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt
    });
  }).toThrow();
});

test("cannot created an appoitment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    const appointment = new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt
    });
  }).toThrow();
});
