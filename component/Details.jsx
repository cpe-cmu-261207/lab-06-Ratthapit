import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";

export default function Cards(props) {
  return (
    <div>
      <div className="text-center">
        <p>
          <IconMailForward /> {props.email}
        </p>
        <p>
          <IconMapPins /> {props.address}
        </p>
      </div>
    </div>
  );
}

{
  /*Complete*/
}
