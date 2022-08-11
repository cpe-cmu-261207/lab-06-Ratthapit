import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
  IconSend,
} from "@tabler/icons";
import React from "react";
import Details from "../component/Details";
import { useState } from "react";

export default function Cards(props) {
  const [click, setclick] = useState(false);
  return (
    <div>
      <div
        className="border-bottom"
        onClick={() => {
          click ? setclick(false) : setclick(true);
        }}
      >
        <div className="d-flex align-items-center p-3">
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>

          {click ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {click ? <Details email={props.email} address={props.address} /> : null}
      </div>
    </div>
  );
}
{
  /*Complete*/
}
