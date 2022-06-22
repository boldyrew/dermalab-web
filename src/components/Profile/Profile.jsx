import React from "react";
import { ProfileAnalysis } from "./ProfileAnalysis";
import { ProfileInfo } from "./ProfileInfo";

const tabs = {
  info: "info",
  analysis: "analysis",
};

export function Profile(props) {
  const [currentTab, setCurrentTab] = React.useState(tabs.info);

  return (
    <div className="container">
      <div className="analysis">
        <div className="profile">
          <div className="profile-tabs">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentTab(tabs.info)}
                  className={currentTab === tabs.info ? "current" : ""}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentTab(tabs.analysis)}
                  className={currentTab === tabs.analysis ? "current" : ""}
                >
                  Analysis
                </a>
              </li>
            </ul>
          </div>
          <div className="profile-content">
            { currentTab === tabs.info && <ProfileInfo /> }
            { currentTab === tabs.analysis && <ProfileAnalysis /> }
          </div>
        </div>
      </div>
    </div>
  );
}
