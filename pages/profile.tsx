import React from "react";
import Dashboard from "../components/layouts/dashboard";

export default function Profile() {
  return <div>profile</div>;
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
