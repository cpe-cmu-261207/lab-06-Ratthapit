import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import axios from "axios";
import { useState } from "react";
import Cards from "../component/Cards";

export default function Home() {
  const [UserNum, setNum] = useState(1);
  const [Users, setUsers] = useState([]);

  const genUsers = async () => {
    if (UserNum < 1) {
      alert("Invalid Number of User");
      return;
    }

    const resp = await axios.get(
      `https://randomuser.me/api/?results=${UserNum}`
    );

    const newUser = [];
    for (const x of resp.data.results) {
      newUser.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }

    setUsers(newUser);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setNum(event.target.value);
          }}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {Users.map((x) => (
        <Cards key={x.name} {...x} />
      ))}

      <p className="text-center mt-3 text-muted fst-italic">
        made by Pimpitcha Kanitpanyajaroen 640610654
      </p>
    </div>
  );
}

{
  /*Complete*/
}
