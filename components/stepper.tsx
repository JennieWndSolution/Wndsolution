import { Fragment } from "react";
import "../styles/Home.module.scss";

export interface IStepper {
  name: string;
  status: StepperStatus;
  id: string;
}

export enum StepperStatus {
  completed = "completed",
  active = "active",
  left = "left",
  disabled = "disabled",
}

export const Stepper = ({ items }) => {
  return (
    <div className="container">
      <div className="stepper2">
        <ul className="nav nav-tabs" role="tablist">
          {items.map((item: IStepper, id) => {
            return (
              <Fragment key={`${item.id}-${id}`}>
                <li
                  role="presentation"
                  className={`${item.status} item ${
                    item.status === "active" ? "is-active" : ""
                  }`}
                >
                  <a
                    className="persistant-disabled"
                    href={`${item.status === "active" ? item.id : "#"}`}
                    data-toggle="tab"
                    aria-controls={`${item.id}`}
                    role="tab"
                    title={item.name}
                  >
                    <div className="round-tab vertical-center">{item.name}</div>
                  </a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
