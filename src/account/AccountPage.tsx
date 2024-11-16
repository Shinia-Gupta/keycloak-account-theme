import React, { useState } from "react";
import cdot from '../../src/stories/assets/cdot.png';
import yotta from '../../src/stories/assets/yotta-logo.png';
import user from '../../src/stories/assets/user.png';
import styled from 'styled-components'
const AccountPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<"Delhi" | "Mumbai">("Delhi");
  const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


  const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
  const handleRegionChange = (region: "Delhi" | "Mumbai") => {
    setSelectedRegion(region);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header with Logo */}
      <header style={styles.header}>
        <div>
          <img src={cdot} alt="Site Logo" style={styles.logo} />
          <img src={yotta} alt="Site Logo" style={styles.logo} />
        </div>
        <div>
          <img src={user} alt="User Logo" style={styles.logo} />

        </div>
      </header>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Manage Regions Section */}
        <div style={styles.mainManageRegions}>
          <div>
            <h5>MANAGE REGIONS</h5>
          </div>
          <div style={styles.manageRegions}>

            {/* <div style={styles.manageRegionContainer}> */}
            <div style={styles.regionTabs}>
              <button
                onClick={() => handleRegionChange("Delhi")}
                style={{
                  ...styles.tabButton,
                  ...(selectedRegion === "Delhi" ? styles.activeTab : {}),
                }}
              >
                <img src="../../src/stories/assets/Delhi.png" alt="Delhi Logo" style={styles.tablogo}/>
                Delhi
              </button>
              <button
                onClick={() => handleRegionChange("Mumbai")}
                style={{
                  ...styles.tabButton,
                  ...(selectedRegion === "Mumbai" ? styles.activeTab : {}),
                }}
              >

<img src="../../src/stories/assets/Mumbai.png" alt="Mumbai Logo" style={styles.tablogo}/>
                Mumbai
              </button>
            </div>


            {/* Region-Specific Content */}
            <div style={styles.regionContent}>
            <p>Region: <span style={{ fontWeight: "bold" }}>{selectedRegion}</span></p>
            <div style={styles.iconGrid}>
                {services[selectedRegion].map((service) => (
                  <div key={service.name} style={styles.card}>
                    <img src={`../../src/stories/assets/${service.icon}`} style={styles.iconItem} alt={service.name} />
                    <p style={styles.cardName}>{service.name}</p>
                    <p style={styles.cardSubtitle}>( {service.subtitle} )</p>
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* Platform Services Section */}
        <div style={styles.mainPfServices}>
          <div>
            <h5>PLATFORM SERVICES</h5>
          </div>
          <div style={styles.platformServices}>

            <div style={styles.platformGrid}>
              {platformServices.map((service) => (
                <div key={service.name} style={styles.singleIcon}>
                  <img src={`../../src/stories/assets/${service.icon}`} alt={service.name} />

                  <p style={styles.cardName}>{service.name}</p>
                  <p style={styles.cardSubtitle}>( {service.subtitle} )</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const services: {
  [key in "Delhi" | "Mumbai"]: { name: string; subtitle: string, icon: string }[];
} = {
  Delhi: [
    { name: "In Memory DB - Prod", subtitle: "Redis", icon: "redis.png" },
    { name: "In Memory DB - UAT", subtitle: "Redis", icon: "redis.png" },
    { name: "Infrastructure", subtitle: "Apache CloudStack", icon: "cloud.png" },
    { name: "Kubernetes", subtitle: "Rancher", icon: "container.png" },
    { name: "Logging", subtitle: "ELK", icon: "logging.png" },
    { name: "Infrastructure Monitoring", subtitle: "Zabbix", icon: "infrastructure-monitoring.png" },
    { name: "Block and File Storage", subtitle: "Storpool", icon: "storage.png" },
    { name: "Global Load Balancer", subtitle: "F5", icon: "gslb.png" },
    { name: "Network Analyzer", subtitle: "Fortinet", icon: "fortianalyzer.png" },
    { name: "Container Registry", subtitle: "Harbor", icon: "container-registry.png" },
    { name: "CI/CD Pipeline", subtitle: "ArgoCD", icon: "pipeline-management.png" },
    { name: "Virtualization", subtitle: "Harvester", icon: "harvester.png" },
    { name: "Object Storage", subtitle: "MiniIO", icon: "objectStorage.png" },
    { name: "Kubernetes Monitoring", subtitle: "Prometheus Grafana", icon: "prometheus.png" },
    { name: "Block CSI", subtitle: "Longhorn", icon: "longhornicon.png" }
  ],
  Mumbai: [
    { name: "In Memory DB - Prod", subtitle: "Redis", icon: "redis.png" },
    { name: "In Memory DB - UAT", subtitle: "Redis", icon: "redis.png" },
    { name: "Infrastructure", subtitle: "Apache CloudStack", icon: "cloud.png" },
    { name: "Kubernetes", subtitle: "Rancher", icon: "container.png" },
    { name: "Logging", subtitle: "ELK", icon: "logging.png" },
    { name: "Infrastructure Monitoring", subtitle: "Zabbix", icon: "infrastructure-monitoring.png" },
    { name: "Block and File Storage", subtitle: "Storpool", icon: "storage.png" },
    { name: "Global Load Balancer", subtitle: "F5", icon: "gslb.png" },
    { name: "Network Analyzer", subtitle: "Fortinet", icon: "fortianalyzer.png" },
    { name: "Container Registry", subtitle: "Harbor", icon: "container-registry.png" },
    { name: "CI/CD Pipeline", subtitle: "ArgoCD", icon: "pipeline-management.png" },
    { name: "Virtualization", subtitle: "Harvester", icon: "harvester.png" },
    { name: "Object Storage", subtitle: "MiniIO", icon: "objectStorage.png" },
    { name: "Kubernetes Monitoring", subtitle: "Prometheus Grafana", icon: "prometheus.png" },
    { name: "Block CSI", subtitle: "Longhorn", icon: "longhornicon.png" }
  ],
};

const platformServices = [
  { name: "Code Repository", subtitle: "Gitlab", icon: "giticon.png" },
  { name: "Backup", subtitle: "Commvault", icon: "backup.png" },
];

const styles = {
  
  // pageContainer: {
  //   // padding: "20px",
  //   fontFamily: "Arial, sans-serif",
  // },
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundImage: `
      linear-gradient(180deg, rgb(239,251,254), rgba(255, 255, 255, 0.6)), 
      url('../../src/stories/assets/bottom-image-FZMKO7TE.jpg')`,
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents image repetition
    minHeight: "100vh", // Ensures it spans the full viewport height
  // padding:"10px",

  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "rgb(248,249,250)",
    padding:"10px"

  },
  logo: {
    height: "40px",
    marginRight: "10px",
  },
  headerText: {
    fontSize: "24px",
    color: "#333",
  },
  mainManageRegions: {
    backgroundColor: "transparent",
    marginLeft:"10px"
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    gap: "10px"
  },
  manageRegions: {
    // width: "80%",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "10px",
    gap: 0
  },
  manageRegionContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f9f9f9"

  },
  regionTabs: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    marginBottom: "20px",
    // gap:"10px"
  },
  tabButton: {
    padding: "10px 15px",
    // marginRight: "10px",
    borderTopLeftRadius: "5px", // Round top-left corner
    borderBottomLeftRadius: "5px", // Round bottom-left corner    border: "none",
    outline: "none",
    border:"none",
    cursor: "pointer",
    backgroundColor: "transparent",
minWidth:"120px",
    // backgroundColor: "#f9f9f9",
  },
  activeTab: {
    backgroundColor: "#f9f9f9",

    color: "black",
  },
  tablogo:{
    height: "20px",
    marginRight: "5px",
  },
  regionContent: {
    padding: "15px",
    // border: "1px solid #ddd",
    width: "100%",
    borderTopRightRadius: "8px", // Round top-left corner
    borderBottomRightRadius: "8px", // Round bottom-left corner
    backgroundColor: "#f9f9f9"
  },
  iconGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for icons
    justifyItems: "center", // Center items horizontally within each cell
    alignItems: "center", // Center items vertically within each cell
    gap: "15px",
    // marginTop: "10px",
  },

  iconItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    cursor:"pointer"
  },
  mainPfServices: {
    backgroundColor: "transparent",
    marginRight:"10px"

  },
  card: {
    padding: "15px",
    // border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center" as const,
  },
  cardName: {
    fontSize: "16px",
    fontWeight: "bold" as const,
  },
  cardSubtitle: {
    fontSize: "12px",
    color: "#666",
  },
  platformServices: {
    // width: "30%",
    backgroundColor: "#f9f9f9",

  },
  platformGrid: {
    display: "grid",
    gridTemplateRows: "repeat(auto-fill, minmax(50px, 1fr))",
    gap: "15px",
  },
  singleIcon: {
    padding: "10px",
    // border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center" as const,
    cursor:"pointer"
    // backgroundColor: "#f9f9f9",
  },
  "@media (max-width: 768px)": { // Adjust breakpoint as needed
    iconGrid: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    iconItem: {
      width: "100%", // Each icon takes full width in column layout
    },
  },
  // "@media (max-width: 768px)": {
  //   iconGrid: {
  //     grid-template-columns: "1fr"; /* Switch to 1 column on small screens */
  //   }
  // }
};

export default AccountPage;
