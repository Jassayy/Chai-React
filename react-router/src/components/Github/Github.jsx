import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Jassayy")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="bg-emerald-700 text-center text-3xl text-emerald-50">
      GitHub Followers : {data.followers}
      <br />
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
