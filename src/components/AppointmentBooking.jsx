import React, { useEffect, useState } from "react";
import BookingBottomBar from "./BookingBottomBar";
import SlotButton from "./common/SlotButton";
import SlotDropdown from "./SlotDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import moment from "moment";
import { fetchData } from "../store/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const AppointmentBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state);
  const [availableSlot, setAvailableSlot] = useState();

  useEffect(() => {
    const firstdate = moment().startOf("month").format("YYYY-MM-DD");
    const lastdate = moment().endOf("month").format("YYYY-MM-DD");
    dispatch(fetchData(firstdate, lastdate));
  }, [dispatch]);

  useEffect(() => {
    const filteredData = filterDataByDate(dataState, startDate);
    setAvailableSlot(filteredData);
  }, [dataState?.data, startDate]);

  const filterDataByDate = (data, date) => {
    return data?.data?.filter(
      (slot) =>
        moment(slot.date).format("YYYY-MM-DD") ===
        moment(date).format("YYYY-MM-DD")
    )?.[0];
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div className="main-booking-appointment-component">
        {/* calender */}
        <div className="booking-appointment">
          <div className="appointment-calender">
            <div className="test-service-text">Test Service</div>
            <div className="time-zone-text">
              Timezone:{" "}
              <span
                style={{
                  fontWeight: 400,
                }}
              >
                Asia/Calcutta
              </span>
            </div>

            <DatePicker
              inline
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              onMonthChange={(currentMonth) => {
                const currentDate = moment();
                const specifiedMonthStart =
                  moment(currentMonth)?.startOf("month");
                const specifiedMonthEnd = moment(currentMonth)?.endOf("month");
                let firstdate;
                if (specifiedMonthStart?.isSame(currentDate, "month")) {
                  firstdate = currentDate?.format("YYYY-MM-DD");
                } else {
                  firstdate = specifiedMonthStart?.format("YYYY-MM-DD");
                }
                const lastdate = specifiedMonthEnd?.format("YYYY-MM-DD");
                dispatch(fetchData(firstdate, lastdate));
                setStartDate(firstdate);
              }}
            />
          </div>

          <div className="time-slot">
            <div className="available-slot-text">
              {" "}
              {dataState?.loading ? (
                <SkeletonTheme
                  baseColor="#C7C9D9"
                  highlightColor="#FAFAFC"
                  height={"20px"}
                >
                  <Skeleton
                    baseColor="#FAFAFC"
                    highlightColor="#C7C9D9"
                    count={1}
                  />
                </SkeletonTheme>
              ) : (
                "SELECT FROM VARIANTS"
              )}
            </div>
            <SlotDropdown isLoading={dataState?.loading} />
            <div className="divider"></div>

            <div className="available-slot-text">
              {dataState?.loading ? (
                <SkeletonTheme
                  baseColor="#C7C9D9"
                  highlightColor="#FAFAFC"
                  height={"20px"}
                >
                  <Skeleton
                    baseColor="#FAFAFC"
                    highlightColor="#C7C9D9"
                    count={1}
                  />
                </SkeletonTheme>
              ) : (
                `${moment(availableSlot?.date).format("dddd, MMM D")}`
              )}
            </div>

            {dataState?.loading ? (
              <SkeletonTheme
                baseColor="#C7C9D9"
                highlightColor="#FAFAFC"
                height={"48px"}
              >
                <Skeleton
                  baseColor="#FAFAFC"
                  highlightColor="#C7C9D9"
                  count={4}
                />
              </SkeletonTheme>
            ) : (
              <div
                className="no-scrollbar"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  height: "244px",
                  overflowY: "auto",
                }}
              >
                <>
                  {availableSlot?.slots?.length === 0 ||
                  availableSlot?.slots?.length === undefined ? (
                    <div
                      style={{
                        alignSelf: "center",
                        margin: "auto",
                      }}
                    >
                      No slots available
                    </div>
                  ) : (
                    <>
                      {availableSlot?.slots?.map((el, i) => (
                        <React.Fragment key={i}>
                          <SlotButton el={el} />
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </>
              </div>
            )}
          </div>
        </div>
        {/* Bottom bar */}
        <BookingBottomBar />
      </div>
    </div>
  );
};

export default AppointmentBooking;
