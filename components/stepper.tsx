import { Fragment } from "react";
import "../styles/Home.module.scss";

export interface IStepper {
  name: string;
  active: boolean;
  id: string;
  heading: string;
}

export const Stepper = ({ items }) => {
  console.log(items);

  return (
    <div className="container">
      <div className="stepper">
        <ul className="nav nav-tabs" role="tablist">
          {items.map((item: IStepper, id) => {
            return (
              <Fragment key={`${item.id}-${id}`}>
                <li
                  role="presentation"
                  className={`${item.active ? "active" : "disabled"}`}
                >
                  <a
                    className="persistant-disabled"
                    href={`${item.id}`}
                    data-toggle="tab"
                    aria-controls={`${item.id}`}
                    role="tab"
                    title="Step 1"
                  >
                    <span className="round-tab">{id + 1}</span>
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
