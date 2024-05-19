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

  useEffect(() => {
    let endDate = moment(startDate, "YYYY-MM-DD");
    endDate?.add(1, "days");
    dispatch(
      fetchData(
        moment(startDate).format("YYYY-MM-DD"),
        moment(endDate).format("YYYY-MM-DD")
      )
    );
  }, [startDate, dispatch]);

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
                `${moment(dataState?.data?.date).format("dddd, MMM D")}`
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
                {dataState?.data?.slots?.map((el, i) => (
                  <SlotButton key={i} el={el} />
                ))}
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
