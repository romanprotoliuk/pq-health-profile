import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import JsonFileInput from "../../helper/JsonFileUploader/JsonFileUploader";
import { useJsonData } from "../../context/UserUploads/useJsonData";
import "./LeftCategories.styles.css"; // Import the CSS file

const LeftCategories = () => {
  const [expandedPanels, setExpandedPanels] = useState({});
  const { jsonData, handleFileChange } = useJsonData();

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpandedPanels((prevExpandedPanels) => ({
      ...prevExpandedPanels,
      [panel]: isExpanded ? true : false,
    }));
  };

  const getVariableNames = (section) => {
    switch (section) {
      case "Nutritional-Imbalances":
        return { item: "Nutrient", value: "Imbalance" };
      case "Metal-Sensitivities":
        return { item: "Metal", value: "Sensitivity" };
      case "Hormonal-Imbalances":
        return { item: "Hormone", value: "Imbalance" };
      case "Digestive Health & Metabolism Analysis":
        return { item: "Enzyme", value: "Imbalance" };
      default:
        return { item: "Item", value: "Sensitivity" };
    }
  };

  const renderAccordionBioresonance = (section) => {
    if (!jsonData) return null;

    const allergyReport = jsonData["Bioresonance-Test-Report"];
    if (!allergyReport || !allergyReport[section]) return null;

    const { Details, Explanation } = allergyReport[section];
    if (!Details || !Array.isArray(Details)) return null;

    const isExpanded = expandedPanels[section] || false;
    const { item, value } = getVariableNames(section);

    return (
      <Accordion
        expanded={isExpanded}
        onChange={handleChange(section)}
        className="accordion"
        key={section}
        style={{
          border: `1px solid ${
            section === "Bioresonace Test"
              ? "#2c2ad5"
              : jsonData
              ? "#03c8a8"
              : "rgba(0, 0, 0, 0.2)"
          }`,
          borderRadius: "8px",
          marginBottom: "16px",
          position: "static",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="accordion-summary"
        >
          <Typography
            variant="h2"
            className="section-title"
            style={{ fontSize: "24px" }}
          >
            {section}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          {Explanation && (
            <Typography className="explanation">{Explanation}</Typography>
          )}

          {!Details || Details.length === 0 ? (
            <div className="empty-category-message">
              You have shown NO anomalies for this section and therefore have no
              results
            </div>
          ) : (
            Details.map((detail, index) => (
              <div key={index} className="item-details-wrapper">
                <div className="item-container-inside-accordion-card">
                  <div className="item-row">
                    <div className="item-cell">
                      <div className="text-container">
                        <span className="clickable-text">{detail[item]}</span>
                      </div>
                    </div>
                    <div className="item-cell">
                      <div className="percentage-container">
                        <div className="value-container">
                          <span className="item-sensitivity">
                            {detail[value]}%
                          </span>
                        </div>
                        <div
                          className={`color-indicator ${
                            detail[value] >= 95
                              ? "red-gradient"
                              : "yellow-gradient"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="explanation-row">
                    <p className="explanation">{detail.Explanation}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div>
      <Accordion
        className="accordion"
        style={{
          // border: `1px solid ${
          //   section === "User Info"
          //     ? "#2c2ad5"
          //     : userInfoForm
          //     ? "#03c8a8"
          //     : "rgba(0, 0, 0, 0.2)"
          // }`,
          borderRadius: "8px",
          marginBottom: "16px",
          position: "static",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h2"
            className="section-title"
            style={{ fontSize: "24px" }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              {jsonData && (
                <CheckBoxIcon sx={{ color: "#03c8a8", marginRight: "20px" }} />
              )}
              Bioresonance Test
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {!jsonData && <JsonFileInput onFileChange={handleFileChange} />}
          {jsonData &&
            Object.keys(jsonData["Bioresonance-Test-Report"]).map((section) =>
              renderAccordionBioresonance(section)
            )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LeftCategories;
