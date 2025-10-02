// src/reports/ElectricityBill.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateElectricityPDF = (billingData, projects) => {

  // if (!billingData.billingType || !billingData.btNo || !billingData.sector) {
  //   alert('Please fill all required fields!');
  //   return;
  // }

  const doc = new jsPDF("p", "mm", "a4");

    // // Generate Barcode
    // const canvas = document.createElement("canvas");
    // JsBarcode(canvas, "BTL-10743August2025", {
    //   format: "CODE39",
    //   displayValue: true,
    //   fontSize: 14,
    // });
    // const imgData = canvas.toDataURL("image/png");
    // doc.addImage(imgData, "PNG", 70, 50, 70, 20);


  // Images
  doc.addImage("logo.png", "PNG", 15, 24, 18, 18);

  //Header
  autoTable(doc, {
    head: [],
    body: [
      [
        { content: "", rowSpan: 3, styles: { valign: "bottom" } },
        {
          content: "BAHRIA TOWN PVT LTD - ELECTRICITY BILL",
          colSpan: 2,
          styles: { lineWidth: { top: 0.1, right: 0.1, bottom: 0, left: 0.1 }, fontStyle: "bold", font: "helvetica", fontSize: 15, minCellHeight: 7, cellPadding: { top: 2} },
        },
      ],
      [
        {
          content: "                YOUR LIFE STYLE DESTINATION",
          styles: { lineWidth: { top: 0, right: 0, bottom: 0.1, left: 0.1 }, fontSize: 8, minCellHeight: 4, cellPadding: {bottom: 0.5 }, halign: "left"},
        },
        {
          content: "GST NO. 07-02-8400-061-28               ",
          styles: { lineWidth: { top: 0, right: 0.1, bottom: 0.1, left: 0 }, fontSize: 8, minCellHeight: 4, cellPadding: { bottom: 0.5 }, halign: "right" },
        },
      ],
      [
        {
          content: "",
          colSpan: 2,
          styles: { minCellHeight: 27},
        }
      ]
    ],
    theme: "grid",
    bodyStyles: {
      fillColor: false,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
    },
    columnStyles: {
      0: { cellWidth: 20 }
    },
  });

  // Header Table
  autoTable(doc, {
    startY: 26.2,
    margin: { left: 34.4 },
    tableWidth: 161.2,
    body: [
      [{content:"  TAHIRA MALIK",colSpan:2}, {content:"CNIC No.",colSpan:2}, {content:"NTN No.",colSpan:2}],
      [{content:"  House No: 24",colSpan:2}, {content:"Block: SAFARI VILLAS",colSpan:2}, {content:"Sector: B",colSpan:2}],
      [{content:" Invoice No: 20250900010",colSpan:3}, {content:"Valid Date: 27-Oct-2025",colSpan:3}],
      ["Reference No", "MF@", "Billing Month", "Reading Date", "Issue Date", "Due Date"],
      ["100000000010", "1", "September 2025", {content:"20-Sep-2025",styles:{fontStyle:"normal"}}, "25-Sep-2025", "08-Oct-2025"]
    ],
    theme: "plain",
    bodyStyles: {
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      halign: "center",
      valign: "middle"
    },
    columnStyles: {
      1: { cellWidth: 25 }
    },
    didParseCell: function (data) {
      if (data.section === "body") {
        if (data.row.index === 0) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0.7;
          data.cell.styles.halign = "left";
           data.cell.styles.fontSize = 9;
        }
        if (data.row.index === 1) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0.7;
           data.cell.styles.halign = "left";
            data.cell.styles.fontSize = 9;
        }
        if (data.row.index === 2) {
          data.cell.styles.minCellHeight = 6;
          data.cell.styles.halign = "left";
          data.cell.styles.fontSize = 10;
          data.cell.styles.fillColor = [235,235,235];
        }
        if (data.row.index === 3) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0;
          data.cell.styles.fontSize = 9;
          data.cell.styles.valign = "middle";
          data.cell.styles.fontStyle = "bold";
          data.cell.styles.fillColor = [190,190,190];
        }
        if (data.row.index === 4) {
          data.cell.styles.minCellHeight = 4;
          data.cell.styles.cellPadding = 0.8;
          data.cell.styles.fontSize = 9;
          data.cell.styles.valign = "middle";
          data.cell.styles.fontStyle = "bold";

          // 🔑 Example: row 4, column 3 wale cell ko normal rakho
          if (data.column.index === 3 || data.column.index === 4) {
            data.cell.styles.fontStyle = "normal"; // ye sirf is cell pe apply hoga
          } else {
            data.cell.styles.fontStyle = "bold";   // baaki sab bold
          }
        }
      }
    },
  });

  // // ✅ Customer Details
  // autoTable(doc, {
  //   startY: 26.2,
  //   margin: { left: 34.2 },
  //   tableWidth: 161.7, // table ki fixed width
  //   body: [
  //     [
  //       { content: billingData.customerName || "Reference No", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "MF@", styles: { fontSize: 9 } },
  //       { content: billingData.block || "Billing Month", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Reading Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Issue Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Due Date", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "Reference No", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "MF@", styles: { fontSize: 9 } },
  //       { content: billingData.block || "Billing Month", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Reading Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Issue Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Due Date", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "100000000010", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "1", styles: { fontSize: 9 } },
  //       { content: billingData.block || "September 2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "20-Sep-2025", styles: { fontSize: 9 } },
  //        { content: billingData.block || "25-Sep-2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "08-Oct-2025", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "Reference No", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "MF@", styles: { fontSize: 9 } },
  //       { content: billingData.block || "Billing Month", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Reading Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Issue Date", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "Due Date", styles: { fontSize: 9 } }
  //     ],
  //     [
  //       { content: billingData.customerName || "100000000010", styles: { fontSize: 9 } },
  //       { content: billingData.btNo || "1", styles: { fontSize: 9 } },
  //       { content: billingData.block || "September 2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "20-Sep-2025", styles: { fontSize: 9 } },
  //        { content: billingData.block || "25-Sep-2025", styles: { fontSize: 9 } },
  //       { content: billingData.sector || "08-Oct-2025", styles: { fontSize: 9 } }
  //     ]
  //   ],
  //   theme: "grid",
  //   bodyStyles: {
  //     fillColor: false,
  //     textColor: [0, 0, 0],
  //     lineColor: [0, 0, 0],
  //     halign: "center",
  //   },
  //   columnStyles: {
  //     // 0: { cellWidth: 20 }
  //   },
  //   didParseCell: function (data) {
  //     if (data.section === "body") {
  //       if (data.row.index === 1) {
  //         data.cell.styles.minCellHeight = 50;
  //          data.cell.styles.fillColor = [255, 200, 200];
  //       }
  //       if (data.row.index === 2) {
  //         data.cell.styles.minCellHeight = 35;
  //       }
  //     }
  //   }
  // });



  



  window.open(doc.output("bloburl"), "_blank");
};

