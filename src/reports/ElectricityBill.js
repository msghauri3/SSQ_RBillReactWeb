import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// import JsBarcode from "jsbarcode";

// ⚡ Electricity Bill PDF Generator (Single Table)
export const generateElectricityPDF = (data, projects) => {

  const doc = new jsPDF("p", "mm", "a4");

  //Header
    autoTable(doc, {
      head: [],
      body: [
        [
          {
            content: "",
            rowSpan: 7,
            styles: {
              lineWidth: { top: 0.1, right: 0.1, bottom: 0.1, left: 0.1 },
            },
          },
          {
            content: "BAHRIA TOWN PVT LTD - ELECTRICITY BILL",
            colSpan: 6,
            styles: {
              lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 },
              fontStyle: "bold",
              font: "helvetica",
              fontSize: 15,
              minCellHeight: 7,
              cellPadding: { top: 2 },
            },
          },
        ],
        [
          {
            content: "                YOUR LIFE STYLE DESTINATION",
            colSpan: 3,
            styles: {
              lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 },
              fontSize: 8,
              minCellHeight: 4,
              cellPadding: { bottom: 0.5 },
              halign: "left",
            },
          },
          {
            content: "GST NO. 07-02-8400-061-28               ",
            colSpan: 3,
            styles: {
              lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0 },
              fontSize: 8,
              minCellHeight: 4,
              cellPadding: { bottom: 0.5 },
              halign: "right",
            },
          },
        ],
        [
          {
            content: `  Qasim CNIC No: 123 NTN No: 123`,
            colSpan: 6,
            styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0 } },
          },
        ],
        [
          {
            content: `  House No: F-12/2  Block: Safari Villas  Sector: B`,
            colSpan: 6,
            styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0 } },
          },
        ],
        [
          {
            content: `  Invoice No: 1345`,
            colSpan: 3,
            styles: { lineWidth: { top: 0, right: 0, bottom: 0, left: 0.1 } },
          },
          {
            content: `Valid Date: 1-1-2025`,
            colSpan: 3,
            styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0 } },
          },
        ],
        [
          {
            content: "Reference No",
            styles: { lineWidth: { top: 0, right: 0, bottom: 0, left: 0.1 } },
          },
          "MF@",
          "Billing Month",
          "Reading Date",
          "Issue Date",
          {
            content: "Due Date",
            styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0 } },
          },
        ],
        [
          "BTL-10014",
          "1",
          `September.
          2025`,
          {
            content: "1-1-2025",
            styles: { fontStyle: "normal" },
          },
          "1-1-2025",
          {
            content: "1-1-2025",
            styles: { lineWidth: { top: 0, right: 0.1, bottom: 0, left: 0 } },
          },
        ],
      ],
      theme: "plain",
      // margin: { top: 10 },
      bodyStyles: {
        fillColor: false,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        halign: "center",
      },
      columnStyles: {
        0: { cellWidth: 20 },
        2: { cellWidth: 25 },
      },
      didParseCell: function (data) {
        if (data.section === "body") {
          if (data.row.index === 2) {
            data.cell.styles.minCellHeight = 3;
            data.cell.styles.cellPadding = 0.5;
            data.cell.styles.halign = "left";
            data.cell.styles.fontSize = 9;
          }
          if (data.row.index === 3) {
            data.cell.styles.minCellHeight = 3;
            data.cell.styles.cellPadding = 0.5;
            data.cell.styles.halign = "left";
            data.cell.styles.fontSize = 9;
          }
          if (data.row.index === 4) {
            data.cell.styles.minCellHeight = 4;
            data.cell.styles.cellPadding = 0.5;
            data.cell.styles.halign = "left";
            data.cell.styles.fontSize = 9;
            data.cell.styles.fillColor = [235, 235, 235];
          }
          if (data.row.index === 5) {
            data.cell.styles.minCellHeight = 3;
            data.cell.styles.cellPadding = 0.5;
            data.cell.styles.fontSize = 8;
            data.cell.styles.valign = "middle";
            data.cell.styles.fontStyle = "bold";
            data.cell.styles.fillColor = [190, 190, 190];
          }
          if (data.row.index === 6) {
            data.cell.styles.minCellHeight = 3;
            data.cell.styles.cellPadding = 0.5;
            data.cell.styles.fontSize = 8;
            data.cell.styles.valign = "middle";
            data.cell.styles.fontStyle = "bold";
  
            // 🔑 Example: row 4, column 3 wale cell ko normal rakho
            if (data.column.index === 4 || data.column.index === 5) {
              data.cell.styles.fontStyle = "normal"; // ye sirf is cell pe apply hoga
            } else {
              data.cell.styles.fontStyle = "bold"; // baaki sab bold
            }
          }
        }
      },
    });
 
  

  // Open in new tab
  window.open(doc.output("bloburl"), "_blank");
};
